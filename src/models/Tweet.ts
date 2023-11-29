import {User} from './User'
import { randomUUID } from "node:crypto";

export class Tweet {
     private _id: string;
     content: string;
     type: string;

     constructor(content: string, type: string) {
        this._id = randomUUID() ;
        this.content = content;
        this.type = type;
     }

    reply(content: string){}
    like(){}
    show(){}
    showReplies(){}
}