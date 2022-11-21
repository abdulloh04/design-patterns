import {Strategy} from "../strategy";
import {AuthArgs} from "../../@types/auth.type";

export class GoogleStrategy implements Strategy {
    public authenticate(args: AuthArgs): boolean {
        if (args.token !== "google123") {
            console.log("Аутентификация с помощью аккаунта Google провалилась!")
            return false
        }

        console.log("Аутентификация с помощью аккаунта Google выполнена успешно!");
        return true
    }
}