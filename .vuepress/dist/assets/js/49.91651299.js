(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    391: function (t, s, a) {
      "use strict";
      a.r(s);
      var n = a(25),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "module-bud-api-sync" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#module-bud-api-sync" },
                    },
                    [t._v("#")]
                  ),
                  t._v(' Module: "bud/api/sync"'),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "functions" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#functions" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Functions"),
                ]),
                t._v(" "),
                a("h3", { attrs: { id: "const-sync" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-sync" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  a("code", [t._v("Const")]),
                  t._v(" sync"),
                ]),
                t._v(" "),
                a("p", [
                  t._v("▸ "),
                  a("strong", [t._v("sync")]),
                  t._v("("),
                  a("code", [t._v("__namedParameters")]),
                  t._v(": object): "),
                  a(
                    "em",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/bud/modules/_bud_util_types_.html#bud",
                          },
                        },
                        [t._v("Bud")]
                      ),
                    ],
                    1
                  ),
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
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/api/sync.ts#L17",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/api/sync.ts:17"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "bud-sync" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bud-sync" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" bud.sync"),
                ]),
                t._v(" "),
                a("p", [t._v("Configure BrowserSync.")]),
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
                        [t._v("sync")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("{")]
                      ),
                      t._v("\n  enabled"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v("!")]
                      ),
                      t._v("bud"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      t._v("inProduction"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  proxy"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'http://bud.test'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  host"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'localhost'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
                      ),
                      t._v("\n  port"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token number" } }, [
                        t._v("3000"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(",")]
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
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("p", [a("strong", [t._v("Parameters:")])]),
                t._v(" "),
                a("p", [
                  t._v("▪ "),
                  a("strong", [t._v("__namedParameters")]),
                  t._v(": "),
                  a("em", [t._v("object")]),
                ]),
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
                      a("td", [a("code", [t._v("enabled")])]),
                      t._v(" "),
                      a("td", [t._v("boolean")]),
                    ]),
                    t._v(" "),
                    a("tr", [
                      a("td", [a("code", [t._v("options")])]),
                      t._v(" "),
                      a("td", [t._v("Options")]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                a("p", [
                  a("strong", [t._v("Returns:")]),
                  t._v(" "),
                  a(
                    "em",
                    [
                      a(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/bud/modules/_bud_util_types_.html#bud",
                          },
                        },
                        [t._v("Bud")]
                      ),
                    ],
                    1
                  ),
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
      s.default = e.exports;
    },
  },
]);
