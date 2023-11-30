import { User } from "./User";
import { randomUUID } from "node:crypto";

export class Tweet {
  private _tweetId: string;
  content: string;
  type: "normal" | "reply";
  likes: User[] = [];
  user: User;
  replies: Tweet[] = [];

  constructor(content: string, type: "normal" | "reply") {
    this._tweetId = randomUUID();
    this.content = content;
    this.type = type;
  }

  reply(content: string) {}

  like(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }
  showLikes():string[] {
   return this.likes.map((user) => user.name)
  }
  showReplies() {}
}
