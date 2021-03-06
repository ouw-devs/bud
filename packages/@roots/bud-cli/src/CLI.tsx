import {Mark} from '@roots/bud-dashboard'
import {render} from 'ink-testing-library'
import Commander from 'commander'
import Output from './Output'
import {CLIConstructor, Command} from './interface'
import Config from './Config'

/**
 * CLI
 */
export class CLI {
  /**
   * Config source
   */
  public config: Config

  /**
   * Command invocation
   */
  public name: string = 'bud'

  /**
   * Command description
   */
  public description: string = 'Bud CLI'

  /**
   * Project URL
   */
  public projectUrl: string

  /**
   * Yargs
   */
  public instance: Commander.Command

  /**
   * Output
   */
  public output: Output

  /**
   * Cwd
   */
  public cwd = process.cwd()

  /**
   * Commands
   */
  public _commands: Command.Declaration

  /**
   * Constructor
   */
  public constructor(args?: CLIConstructor) {
    this.name = args.name
    this.projectUrl = args.projectUrl
    this.commands = args.commands

    this.config = new Config(args.app, this)
    this.instance = new Commander.Command(this.name)

    const output = new Output(this.name, this.instance)

    this.instance
      .configureOutput(output.config)
      .usage('[command]')
      .storeOptionsAsProperties(true)
      .addHelpCommand(
        'help [command]',
        'Get help with a [command]',
      )
      .action(() => {
        output.writeOut(this.instance.helpInformation())
      })
  }

  public get commands(): Command.Declaration {
    return this._commands
  }

  public set commands(commands: Command.Declaration) {
    this._commands = commands
  }

  /**
   * Invoke command line stdout
   */
  public invoke(): void {
    Object.values(this.commands).map((Sub: Command.Newable) => {
      const sub = new Sub(this)

      const command = new Commander.Command()
        .command(`${sub.name} ${sub.signature}`)
        .description(sub.description, sub.arguments)
        .action(sub.action)
        .usage(sub.usage)

      command.configureOutput(
        new Output(this.name, command).config,
      )

      sub.has('options') &&
        Object.values(sub.options).map(opt => {
          const option = new Commander.Option(
            opt.flags,
            opt.description,
          )

          opt.default && option.default(opt.default)
          opt.choices && option.choices(opt.choices)

          typeof opt.optional == 'boolean' &&
            (() => {
              option.mandatory = !opt.optional
            })()

          command.addOption(option)
        })

      this.instance.addCommand(command)
    })

    this.instance.parse()
  }

  /**
   * CLI banner
   */
  public mast(): this {
    console.log(render(Mark({text: this.name})).lastFrame())

    return this
  }
}
