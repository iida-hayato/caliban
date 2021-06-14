(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{368:function(t,a,e){"use strict";e.r(a);var s=e(44),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"federation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#federation"}},[t._v("#")]),t._v(" Federation")]),t._v(" "),e("p",[e("strong",[t._v("Federation")]),t._v(" is an optional module which can be included in your configuration to enroll with a federated schema.")]),t._v(" "),e("h2",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),e("p",[e("code",[t._v("caliban-federation")]),t._v(" only depends on "),e("code",[t._v("caliban-core")]),t._v(" and is very unobtrusive.")]),t._v(" "),e("p",[t._v("To use, add the following line to your "),e("code",[t._v("build.sbt")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('libraryDependencies += "com.github.ghostdogpr" %% "caliban-federation" % "1.0.0"\n')])])]),e("h2",{attrs:{id:"federating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#federating"}},[t._v("#")]),t._v(" Federating")]),t._v(" "),e("p",[t._v("Federation allows graphs to become part of a larger graph without having to share models or create brittle\nschema stitching code at the gateway level.")]),t._v(" "),e("p",[t._v("You can read more about federation and why it may be useful "),e("a",{attrs:{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Federation creates a wrapper over your existing schema so that it can add the necessary hooks to support\ninteraction with the gateway.")]),t._v(" "),e("p",[t._v("If you already have a graph you can add federation simply by calling the wrapper function "),e("code",[t._v("federate")])]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("federation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" schema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphQL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RootResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Queries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  characters "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Amos"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" federatedSchema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("R"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" federate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("This will wrap the bare minimum schema additions around your API so that the gateway will recognize your schema.\nTo actually enable entity resolution you will need to do a bit of leg work.")]),t._v(" "),e("p",[t._v('First, any types that will be "resolvable" need to be annotated with a '),e("code",[t._v("@key")]),t._v(" directive. You can use a helper function found\nin the "),e("code",[t._v("federation")]),t._v(" package to help with that.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GQLDirective")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v('"name"')]),t._v(" field is a field selector minus the outer braces.")]),t._v(" "),e("p",[t._v("If you need to extend a type from another service, you will need to define a stub version of it in the current service\nand annotate it with the "),e("code",[t._v("@extends")]),t._v(" annotation")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GQLDirective")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"season episode"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GQLDirective")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Extend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Episode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GQLDirective")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("External"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" season"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GQLDirective")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("External"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" episode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cast"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Note the additional annotations we needed in this case. "),e("code",[t._v("Extend")]),t._v(" is needed to tell the gateway that this type is defined within\nanother service, while the "),e("code",[t._v("External")]),t._v(" flags these fields as being owned by the other service (there are several other annotations\navailable that you are encouraged to read about).")]),t._v(" "),e("p",[t._v("Once you have annotated your types you need to tell "),e("code",[t._v("Federation")]),t._v(" how to resolve those types. Federation uses a slightly\ndifferent mechanism in resolving types from a standard GraphQL query, so for each type that you wish to support, you will\nneed to add an "),e("code",[t._v("EntityResolver")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("EntityResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CharacterService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CharacterArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" \n  ZQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("characters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getCharacter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),e("p",[t._v("In the above we need to define an resolver which takes an "),e("code",[t._v("R")]),t._v(" environment type,\nan "),e("code",[t._v("A")]),t._v(" which has an implicit "),e("code",[t._v("ArgBuilder")]),t._v(" and an "),e("code",[t._v("Option[Out]")]),t._v(" where "),e("code",[t._v("Out")]),t._v(" has an implicit\n"),e("code",[t._v("Schema[R, Out]")]),t._v(" available. Creating the above we can now add these resolvers to our federated schema like so:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("federate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aResolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" additionalResolvers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You can now use the resulting "),e("code",[t._v("GraphQL[R]")]),t._v(" to start querying. You can also see the full code example "),e("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples/src/main/scala/example/federation",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tracing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tracing"}},[t._v("#")]),t._v(" Tracing")]),t._v(" "),e("p",[t._v("Federated tracing is slightly different from standard apollo-tracing thus it comes with its own wrapper defined in the "),e("code",[t._v("caliban-federation")]),t._v(" module.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("federation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tracing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ApolloFederatedTracing\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" federate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" additionalResolvers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @@ ApolloFederatedTracing"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper\n")])])]),e("p",[t._v("In federated tracing the gateway communicates with the implementing service via a header "),e("code",[t._v("apollo-federation-include-trace")]),t._v(",\nfor now the only value it can send is "),e("code",[t._v("ftv1")]),t._v(". Thus if you detect this header then you should enable tracing otherwise you can disable it.")]),t._v(" "),e("p",[t._v("If you are using one of the wrappers you are done, they will automatically detect when the gateway\nenables tracing on a request. However, if you are calling the "),e("code",[t._v("interpreter.execute")]),t._v(" independently or you have some other custom\nset up you will need to add one more step to enable tracing.")]),t._v(" "),e("p",[t._v("If you wish to enable it manually (after detecting the header with your preferred framework) you can call: "),e("code",[t._v("request.withFederatedTracing")]),t._v(" which will return a new "),e("code",[t._v("GraphQLRequest")]),t._v(" that informs the wrapper\nthat it should include tracing data as part of the response extensions.")])])}),[],!1,null,null,null);a.default=n.exports}}]);