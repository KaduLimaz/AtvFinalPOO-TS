import {Tweet} from './Tweet'
import { randomUUID } from "node:crypto";

export class User {
  private _id: string;
    name: string;
    email: string;
    username: string;
    private _password: string;

    constructor(name: string, email: string, username: string, password: string) {
      this._id = randomUUID();
      this.name = name;
      this.email = email;
      this.username = username;
      this._password = password;
    }

 get id(): string {
    return this._id; 
 }

 get password(): string {
    return this._password; 
 }


 sendTweet(tweet:Tweet){}
 follow(user:User){}
 showFeed(){}
 showTweets(){}
}