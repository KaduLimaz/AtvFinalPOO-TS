import { randomUUID } from "node:crypto";

export const id = randomUUID();

import {maria,kadu,lucas} from "./database/User"
import {Tweet} from "./models/Tweet"

// kadu.sendTweet(new Tweet ("2","normal"))
maria.sendTweet(new Tweet("OLA MUNDOOO","normal"))
kadu.sendTweet(new Tweet ("ola","normal"))






// maria.showFeed()
// kadu.showFeed()

maria.follow(kadu)
maria.follow(lucas)
maria.follow(maria)


maria.showfollowrs()

