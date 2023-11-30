import { randomUUID } from "node:crypto";

export const id = randomUUID();

import {maria,kadu} from "./database/User"
import {Tweet} from "./models/Tweet"


maria.sendTweet(new Tweet("OLA MUNDOOO","normal"))
// kadu.sendTweet(new Tweet ("ola","normal"))
// kadu.sendTweet(new Tweet ("2","normal"))


maria.showFeed()
// kadu.showFeed()
