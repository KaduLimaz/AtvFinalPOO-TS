import {User} from './User'
import { randomUUID } from "node:crypto";

export class Tweet {
     private _tweetId: string;
     content: string;
     type: string;
     likes: User[] = [];
     user: User;
     replies: Tweet[] = [];
     

     constructor(content: string, type: string) {
        this._tweetId = randomUUID() ;
        this.content = content;
        this.type = type;
     }

    reply(content: string){}
    like(){}
    show(){}
    showReplies(){}
}