import { CliCommandInterface } from '../core/cli-command/cli-command.interface';

type ParsedCommand = {
  [key: string]: string[]
}

export default class CLIApplication {
  private commands: {[propertyName: string]: CliCommandInterface} = {};
  private defaultCommand = '--help';

  private parseCommand(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedCommand);
  }

  public getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  public processCommand(argv: string[]): void {
    const parseCommand = this.parseCommand(argv);
    const [commandName] = Object.keys(parseCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parseCommand[commandName] ?? [];
    command.execute(...commandArguments);
  }

  public registerCommands(commandsList: CliCommandInterface[]): void {
    commandsList.reduce((acc, command) => {
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }
}

