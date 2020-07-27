(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    359: function (t, s, a) {
      "use strict";
      a.r(s);
      var e = a(25),
        r = Object(e.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "module-bud-api-alias" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#module-bud-api-alias" },
                    },
                    [t._v("#")]
                  ),
                  t._v(' Module: "bud/api/alias"'),
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
                a("h3", { attrs: { id: "const-alias" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-alias" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  a("code", [t._v("Const")]),
                  t._v(" alias"),
                ]),
                t._v(" "),
                a(
                  "p",
                  [
                    t._v("▸ "),
                    a("strong", [t._v("alias")]),
                    t._v("("),
                    a("code", [t._v("this")]),
                    t._v(": "),
                    a(
                      "RouterLink",
                      {
                        attrs: { to: "/bud/modules/_bud_util_types_.html#bud" },
                      },
                      [t._v("Bud")]
                    ),
                    t._v(", "),
                    a("code", [t._v("options")]),
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
                  ],
                  1
                ),
                t._v(" "),
                a("p", [
                  a("em", [
                    t._v("Defined in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/api/alias.ts#L21",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("src/bud/api/alias.ts:21"), a("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                a("h2", { attrs: { id: "bud-alias" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bud-alias" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" bud.alias"),
                ]),
                t._v(" "),
                a("p", [
                  t._v(
                    "Resolve modules through webpack aliases. Useful for situations that may otherwise require brittle relative paths."
                  ),
                ]),
                t._v(" "),
                a("p", [t._v("Having defined this alias:")]),
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
                        [t._v("alias")]
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
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'scripts'"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [t._v(":")]
                      ),
                      t._v(" bud"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(".")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("src")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v("(")]
                      ),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'scripts'"),
                      ]),
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
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [t._v(")")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                a("p", [
                  t._v(
                    "You can now reference scripts against that alias in your import statements:"
                  ),
                ]),
                t._v(" "),
                a("div", { staticClass: "language-js extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [t._v("import")]
                      ),
                      t._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        t._v("'scripts/myScript'"),
                      ]),
                      t._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("// replacing '../../myScript'")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
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
                      a("td", [a("code", [t._v("this")])]),
                      t._v(" "),
                      a(
                        "td",
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
                    a("tr", [
                      a("td", [a("code", [t._v("options")])]),
                      t._v(" "),
                      a("td", [t._v("object")]),
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
      s.default = r.exports;
    },
  },
]);
