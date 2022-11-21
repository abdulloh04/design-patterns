import {AuthArgs, LocalArgs} from "../@types/auth.type";

export interface Strategy {
    authenticate(args: AuthArgs | LocalArgs): boolean
}

export class AuthStrategy {
    strategies: Record<string, Strategy> = {}

    public use(name: string, strategy: Strategy) {
        this.strategies[name] = strategy
    }

    public authenticate(name: string, args: AuthArgs | LocalArgs) {
        if(!this.strategies[name]) console.error("Политика аутентификации не установлена!");

        return this.strategies[name].authenticate.apply(null, [args])
    }
}