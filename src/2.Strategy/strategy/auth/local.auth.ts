import {Strategy} from "../strategy";
import {LocalArgs} from "../../@types/auth.type";

export class LocalStrategy implements Strategy {
    public authenticate(args: LocalArgs): boolean {
        if (args.username !== 'admin' && args.password !== '12345678') {
            console.log("Неправильное имя пользователя или пароль!");
            return false
        }

        console.log("Аутентификация с помощью логина и пароля выполнена успешно!");
        return true
    }
}