import {Strategy} from "../strategy";
import {AuthArgs} from "../../@types/auth.type";

export class TwitterStrategy implements Strategy {
    public authenticate(args: AuthArgs): boolean {
        if (args.token !== "twitter123") {
            console.log("Аутентификация с помощью аккаунта Twitter провалилась!")
            return false
        }

        console.log("Аутентификация с помощью аккаунта Twitter выполнена успешно!");
        return true
    }
}
