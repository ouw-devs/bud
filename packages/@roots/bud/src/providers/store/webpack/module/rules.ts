import {Webpack} from '@roots/bud-typings'
import {Framework} from '@roots/bud-framework'

declare type Rule = Webpack.RuleSetRule
declare type Rules = Rule[]
declare type BuildRules = (app: Framework) => Rules

/**
 * webpack.module.rules build function
 */
export const rules: BuildRules = (app: Framework) =>
  /**
   * @filter
   * @name webpack.module.rules
   */
  app.hooks.filter('webpack.module.rules', [
    {
      /**
       * You should just use babel.
       */
      parser: {requireEnsure: false},

      /**
       * OneOf ruleset reducer
       */
      oneOf: app.hooks.filter(
        'webpack.module.rules.oneOf',
        app.build
          .getEntries('rules')
          .reduce(
            (rules, [label, rule]) => [
              ...rules,
              /**
               * @filter
               * @name webpack.module.rules.{item}
               */
              app.hooks.filter(
                `webpack.module.rules.oneOf.${label}`,
                Object.entries(app.access(rule)).reduce(
                  (rule, [prop, value]) => ({
                    ...rule,
                    [prop]: app.access(value),
                  }),
                  {},
                ),
              ),
            ],
            [],
          )
          .filter(Boolean),
      ),
    },
  ])
