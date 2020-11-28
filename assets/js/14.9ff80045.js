(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{383:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache Control")]),t._v(" "),s("h2",{attrs:{id:"tab-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tab-rules"}},[t._v("#")]),t._v(" Tab Rules")]),t._v(" "),s("p",[s("strong",[t._v("page tab rules")]),t._v(" define different routes "),s("strong",[t._v("ways to open tabs by routing")]),t._v(".")]),t._v(" "),s("p",[t._v("By configuring the routing of "),s("code",[t._v("meta.key")]),t._v(" properties, you can customize the tab for a particular route.")]),t._v(" "),s("h3",{attrs:{id:"default-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-rule"}},[t._v("#")]),t._v(" Default rule")]),t._v(" "),s("p",[t._v("By default, pages from the same route opens the same tab.")]),t._v(" "),s("h3",{attrs:{id:"built-in-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-rules"}},[t._v("#")]),t._v(" Built-in rules")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("path")])]),t._v(" "),s("ul",[s("li",[t._v("Rule:"),s("code",[t._v("route => route.path")])]),t._v(" "),s("li",[t._v("Note: Routes with the same "),s("code",[t._v("route.params")]),t._v(" share tabs.")]),t._v(" "),s("li",[s("demo-link",{attrs:{href:"/default/rule/path/a/1"}})],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("According to the tab rules in the example:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/1")]),t._v(" and "),s("code",[t._v("/my-page/2")]),t._v(" have different "),s("code",[t._v("params")]),t._v(", will open in "),s("strong",[t._v("separate")]),t._v(" tab.")]),t._v(" "),s("li",[s("code",[t._v("/my-page/1")]),t._v("、"),s("code",[t._v("/my-page/1?a=1")]),t._v(" and "),s("code",[t._v("/my-page/1?b=2")]),t._v(" have the same "),s("code",[t._v("params")]),t._v(", will open the "),s("strong",[t._v("same")]),t._v(" tab.")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("fullPath")])]),t._v(" "),s("ul",[s("li",[t._v("Rule:"),s("code",[t._v("route => route.fullPath.replace(route.hash, '')")])]),t._v(" "),s("li",[t._v("Note: Routes with the same "),s("code",[t._v("route.params")]),t._v(" and "),s("code",[t._v("route.query")]),t._v(" share tabs.")]),t._v(" "),s("li",[s("demo-link",{attrs:{href:"/default/rule/fullPath/a/1"}})],1)]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullPath'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("According to the tab rules in the example:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/1")]),t._v(" and "),s("code",[t._v("/my-page/2")]),t._v(" have different "),s("code",[t._v("params")]),t._v(", will open in "),s("strong",[t._v("separate")]),t._v(" tab.")]),t._v(" "),s("li",[s("code",[t._v("/my-page/1")]),t._v("、"),s("code",[t._v("/my-page/1?a=1")]),t._v(" and "),s("code",[t._v("/my-page/1?b=2")]),t._v(" have the different "),s("code",[t._v("query")]),t._v(", will open in "),s("strong",[t._v("separate")]),t._v(" tab.")])])])]),t._v(" "),s("h3",{attrs:{id:"custom-rule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-rule"}},[t._v("#")]),t._v(" Custom rule")]),t._v(" "),s("p",[t._v("In addition to using built-in rules, you can also customize your own rules with functions.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:catalog/:type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Custom rule'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/my-page/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("catalog"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("According to the tab rules in the example:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/a/1")]),t._v(" amd "),s("code",[t._v("/my-page/a/2")]),t._v(", have the same "),s("code",[t._v("params.catalog")]),t._v(", will open the "),s("strong",[t._v("same")]),t._v(" tab.")]),t._v(" "),s("li",[s("code",[t._v("/my-page/a/1")]),t._v(" and "),s("code",[t._v("/my-page/b/1")]),t._v(", have different "),s("code",[t._v("params.catalog")]),t._v(", will open in "),s("strong",[t._v("separate")]),t._v(" tab.")])]),t._v(" "),s("h2",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" Keep Alive")]),t._v(" "),s("p",[t._v("RouterTab caches the page of each tab by default.")]),t._v(" "),s("p",[t._v("You can set "),s("code",[t._v("keep-alive")]),t._v(" of RouterTab component to cancel this behavior, or you can set "),s("code",[t._v("meta.keepAlive")]),t._v(" of route to override the component default configuration.")]),t._v(" "),s("p",[t._v("If the tab is uncacheable, the page component instance will be recreated every time you enter the tab.")]),t._v(" "),s("p",[s("strong",[t._v("Global")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":keep-alive")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("Route")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keepAlive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"max-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-alive"}},[t._v("#")]),t._v(" Max Alive")]),t._v(" "),s("p",[t._v("You can set the "),s("code",[t._v("max-alive")]),t._v(" of the RouterTab component to control the maximum number of caches for the tabs. "),s("code",[t._v("0")]),t._v(" (default) for no limit.")]),t._v(" "),s("p",[t._v("After the number of tabs exceeds the set value, the cache of the earliest opened tabs will be cleared.")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":max-alive")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"reusable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reusable"}},[t._v("#")]),t._v(" Reusable")]),t._v(" "),s("p",[t._v("By default, the route of the same tab is opened again. If the "),s("code",[t._v("params")]),t._v(" or "),s("code",[t._v("query")]),t._v(" of the route changes, RouterTab will clear the last page cache and recreate the page instance.")]),t._v(" "),s("p",[t._v("You can set "),s("code",[t._v("reuse")]),t._v(" of the RouterTab component to cancel this behavior, or you can override the component’s default configuration via "),s("code",[t._v("meta.reuse")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If set "),s("code",[t._v("reuse")]),t._v(" to "),s("code",[t._v("true")]),t._v(", you may need to update the page data by watching the "),s("code",[t._v("$route")]),t._v(" or using "),s("code",[t._v("activated")]),t._v(" hook.")])]),t._v(" "),s("p",[s("strong",[t._v("Global")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-tab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":reuse")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("Route")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    reuse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After reopening the tab with different params or query, the page will be reused and will not be recreated")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);