package caliban

import caliban.interop.tapir.TestData.sampleCharacters
import caliban.interop.tapir.TestService.TestService
import caliban.interop.tapir.{ FakeAuthorizationInterceptor, TapirAdapterSpec, TestApi, TestService }
import caliban.uploads.Uploads
import sttp.client3.UriContext
import zhttp.http._
import zhttp.service.Server
import zio._
import zio.clock.Clock
import zio.duration._
import zio.test.{ DefaultRunnableSpec, TestFailure, ZSpec }

import scala.language.postfixOps

object ZHttpAdapterSpec extends DefaultRunnableSpec {

  val apiLayer: ZLayer[zio.ZEnv, Throwable, TestService] =
    (for {
      service     <- ZManaged.service[TestService.Service]
      interpreter <- TestApi.api.interpreter.toManaged_
      _           <- Server
                       .start(
                         8088,
                         Http.collectHttp[Request] {
                           case _ -> !! / "api" / "graphql" =>
                             ZHttpAdapter.makeHttpService(
                               interpreter,
                               requestInterceptor = FakeAuthorizationInterceptor.bearer
                             )
                           case _ -> !! / "ws" / "graphql"  => ZHttpAdapter.makeWebSocketService(interpreter)
                         }
                       )
                       .forkManaged
      _           <- clock.sleep(3 seconds).toManaged_
    } yield service)
      .provideCustomLayer(TestService.make(sampleCharacters) ++ Uploads.empty +!+ Clock.live)
      .toLayer

  def spec: ZSpec[ZEnv, Any] = {
    val suite: ZSpec[TestService, Throwable] =
      TapirAdapterSpec.makeSuite(
        "ZHttpAdapterSpec",
        uri"http://localhost:8088/api/graphql",
        wsUri = Some(uri"ws://localhost:8088/ws/graphql")
      )
    suite.provideSomeLayerShared[ZEnv](apiLayer.mapError(TestFailure.fail))
  }
}
