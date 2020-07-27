(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    397: function (t, s, a) {
      "use strict";
      a.r(s);
      var e = a(25),
        o = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "module-bud-hooks-hooks" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#module-bud-hooks-hooks" },
                    },
                    [t._v("#")]
                  ),
                  t._v(' Module: "bud/hooks/hooks"'),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "object-literals" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#object-literals" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Object literals"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "const-hooks" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-hooks" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  a("code", [t._v("Const")]),
                  t._v(" hooks"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "▪-hooks-object" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#▪-hooks-object" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" ▪ "),
                  a("strong", [t._v("hooks")]),
                  t._v(": "),
                  a("em", [t._v("object")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L18",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:18"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "bud-hooks" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bud-hooks" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" bud.hooks"),
                ]),
                t._v(" "),
                a("p", [t._v("Register callback.")]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("bud"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("hooks"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("on")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'hookName'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("function")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token parameter" } },
                        [t._v("value")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("doSomething")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      t._v("value"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("}")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("p", [t._v("Invoke registered callback(s)")]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      t._v("bud"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("hooks")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("call")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'hookName'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v(" value"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("h3", { attrs: { id: "registered" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#registered" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" registered"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("• "),
                  a("strong", [t._v("registered")]),
                  t._v(": "),
                  a("em", [t._v("object")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L22",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:22"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [t._v("Registered hooks.")]),
                t._v(" "),
                a("h4", { attrs: { id: "type-declaration" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#type-declaration" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Type declaration:"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "call" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#call" } },
                    [t._v("#")]
                  ),
                  t._v(" call"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("▸ "),
                  a("strong", [t._v("call")]),
                  t._v("("),
                  a("code", [t._v("name")]),
                  t._v(": string, ..."),
                  a("code", [t._v("params")]),
                  t._v(": [any]): "),
                  a("em", [t._v("void")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L52",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:52"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [t._v("Call a bud hook.")]),
                t._v(" "),
                a("p", [a("strong", [t._v("Parameters:")])]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", [t._v("Name")]),
                      t._v(" "),
                      a("th", [t._v("Type")]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", [a("code", [t._v("name")])]),
                      t._v(" "),
                      a("td", [t._v("string")]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [a("code", [t._v("...params")])]),
                      t._v(" "),
                      a("td", [t._v("[any]")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  a("strong", [t._v("Returns:")]),
                  t._v(" "),
                  a("em", [t._v("void")]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "getall" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#getall" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" getAll"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("▸ "),
                  a("strong", [t._v("getAll")]),
                  t._v("(): "),
                  a("em", [t._v("[string, unknown][]")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L32",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:32"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [t._v("Get all bud hook entries.")]),
                t._v(" "),
                a("p", [
                  a("strong", [t._v("Returns:")]),
                  t._v(" "),
                  a("em", [t._v("[string, unknown][]")]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "make" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#make" } },
                    [t._v("#")]
                  ),
                  t._v(" make"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("▸ "),
                  a("strong", [t._v("make")]),
                  t._v("("),
                  a("code", [t._v("fn")]),
                  t._v(": (Anonymous function)): "),
                  a("em", [t._v("object")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L27",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:27"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [t._v("Make a bud hook")]),
                t._v(" "),
                a("p", [a("strong", [t._v("Parameters:")])]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", [t._v("Name")]),
                      t._v(" "),
                      a("th", [t._v("Type")]),
                      t._v(" "),
                      a("th", [t._v("Default")]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", [a("code", [t._v("fn")])]),
                      t._v(" "),
                      a("td", [t._v("(Anonymous function)")]),
                      t._v(" "),
                      a("td", [t._v("() => null")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  a("strong", [t._v("Returns:")]),
                  t._v(" "),
                  a("em", [t._v("object")]),
                ]),
                t._v(" "),
                a("ul", [
                  a("li", [
                    a("p", [
                      a("strong", [t._v("fired")]),
                      t._v(": "),
                      a("em", [t._v("boolean")]),
                      t._v(" = false"),
                    ]),
                  ]),
                  t._v(" "),
                  a("li", [
                    a("p", [
                      a("strong", [t._v("fn")]),
                      t._v(": "),
                      a("em", [t._v("(Anonymous function)")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "on" } }, [
                  a(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#on" } },
                    [t._v("#")]
                  ),
                  t._v(" on"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("▸ "),
                  a("strong", [t._v("on")]),
                  t._v("("),
                  a("code", [t._v("name")]),
                  t._v(": string, "),
                  a("code", [t._v("callback")]),
                  t._v(": Function): "),
                  a("em", [t._v("any")]),
                ]),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/hooks/hooks.ts#L39",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/hooks/hooks.ts:39"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("p", [t._v("Register a function as a bud hook.")]),
                t._v(" "),
                a("p", [a("strong", [t._v("Parameters:")])]),
                t._v(" "),
                a("table", [
                  a("thead", [
                    a("tr", [
                      a("th", [t._v("Name")]),
                      t._v(" "),
                      a("th", [t._v("Type")]),
                    ]),
                  ]),
                  t._v(" "),
                  a("tbody", [
                    a("tr", [
                      a("td", [a("code", [t._v("name")])]),
                      t._v(" "),
                      a("td", [t._v("string")]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [a("code", [t._v("callback")])]),
                      t._v(" "),
                      a("td", [t._v("Function")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  a("strong", [t._v("Returns:")]),
                  t._v(" "),
                  a("em", [t._v("any")]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = o.exports;
    },
  },
]);
