import {AuthStrategy} from "./strategy/strategy";
import {GoogleStrategy, TwitterStrategy, LocalStrategy} from "./strategy/auth";

const auth = new AuthStrategy()

auth.use("Google", new GoogleStrategy())
auth.authenticate("Google", {token: "google123"})


auth.use("Twitter", new TwitterStrategy())
auth.authenticate("Twitter", {token: "twitter123"})

auth.use("Local", new LocalStrategy())
auth.authenticate("Local", {username: "admin", password: '12345678'})
