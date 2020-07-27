(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    401: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = r(25),
        s = Object(o.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                r("h1", { attrs: { id: "module-bud-mode" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#module-bud-mode" },
                    },
                    [e._v("#")]
                  ),
                  e._v(' Module: "bud/mode"'),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "references" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#references" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" References"),
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "arguments" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#arguments" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" arguments"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("arguments")]),
                  e._v(":"),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "variables" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#variables" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" Variables"),
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "const-envargument" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-envargument" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("Const")]),
                  e._v(" envArgument"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("envArgument")]),
                  e._v(": "),
                  r("em", [e._v("any")]),
                  e._v(" = argv.env"),
                ]),
                e._v(" "),
                r("p", [
                  r("em", [
                    e._v("Defined in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/mode.ts#L13",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/bud/mode.ts:13"), r("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r("p", [e._v("specified via CLI arg")]),
                e._v(" "),
                r("hr"),
                e._v(" "),
                r("h3", { attrs: { id: "const-envfallback" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-envfallback" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("Const")]),
                  e._v(" envFallback"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("envFallback")]),
                  e._v(": "),
                  r("em", [e._v("string")]),
                  e._v(' = "production"'),
                ]),
                e._v(" "),
                r("p", [
                  r("em", [
                    e._v("Defined in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/mode.ts#L8",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/bud/mode.ts:8"), r("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r("p", [e._v("Fallback env")]),
                e._v(" "),
                r("hr"),
                e._v(" "),
                r("h3", { attrs: { id: "const-envproject" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-envproject" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("Const")]),
                  e._v(" envProject"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("envProject")]),
                  e._v(": "),
                  r("em", [e._v("string")]),
                  e._v(" = env?.APP_ENV || envFallback"),
                ]),
                e._v(" "),
                r("p", [
                  r("em", [
                    e._v("Defined in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/mode.ts#L18",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/bud/mode.ts:18"), r("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r("p", [e._v("specified via project .env")]),
                e._v(" "),
                r("hr"),
                e._v(" "),
                r("h3", { attrs: { id: "const-inproduction" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-inproduction" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("Const")]),
                  e._v(" inProduction"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("inProduction")]),
                  e._v(": "),
                  r(
                    "em",
                    [
                      r(
                        "RouterLink",
                        {
                          attrs: {
                            to: "/bud/modules/_bud_types_.html#production",
                          },
                        },
                        [e._v("Production")]
                      ),
                    ],
                    1
                  ),
                  e._v(" = mode === 'production'"),
                ]),
                e._v(" "),
                r("p", [
                  r("em", [
                    e._v("Defined in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/mode.ts#L39",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/bud/mode.ts:39"), r("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "bud-inproduction" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bud-inproduction" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" bud.inProduction"),
                ]),
                e._v(" "),
                r("p", [
                  e._v('True if bud.mode is strictly equal to "production"'),
                ]),
                e._v(" "),
                r("hr"),
                e._v(" "),
                r("h3", { attrs: { id: "const-mode" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#const-mode" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("Const")]),
                  e._v(" mode"),
                ]),
                e._v(" "),
                r("p", [
                  e._v("• "),
                  r("strong", [e._v("mode")]),
                  e._v(": "),
                  r(
                    "em",
                    [
                      r(
                        "RouterLink",
                        { attrs: { to: "/bud/modules/_bud_types_.html#mode" } },
                        [e._v("Mode")]
                      ),
                    ],
                    1
                  ),
                  e._v(" = envArgument ? envArgument : envProject"),
                ]),
                e._v(" "),
                r("p", [
                  r("em", [
                    e._v("Defined in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://github.com/roots/bud-support/blob/8b85437/src/bud/mode.ts#L32",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [e._v("src/bud/mode.ts:32"), r("OutboundLink")],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "bud-mode" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bud-mode" },
                    },
                    [e._v("#")]
                  ),
                  e._v(" bud.mode"),
                ]),
                e._v(" "),
                r("p", [e._v("Webpack mode ('development'|'production')")]),
                e._v(" "),
                r("p", [
                  e._v(
                    "Determined by the first match, in order of precedence:"
                  ),
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [e._v("CLI args")]),
                  e._v(" "),
                  r("li", [e._v("env file")]),
                ]),
                e._v(" "),
                r("p", [e._v("Fallback is 'production'.")]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = s.exports;
    },
  },
]);
