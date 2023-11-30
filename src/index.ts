import { randomUUID } from "node:crypto";

export const id = randomUUID();
import {kaduTweets} from './database/Tweets'
import {maria,kadu,lucas} from "./database/User" // usuarios criados
import {Tweet} from "./models/Tweet"


maria.sendTweet(new Tweet("OLA MUNDOOO","normal"))
kadu.sendTweet(new Tweet ("ola","normal"))
kadu.sendTweet(new Tweet ("2","normal"))

// maria.showTweets()// mostra o tweet completo com @username, tweet, likes e Replies


maria.liketweet(kaduTweets[0])
lucas.liketweet(kaduTweets[0])

kaduTweets[0].showLikes()





