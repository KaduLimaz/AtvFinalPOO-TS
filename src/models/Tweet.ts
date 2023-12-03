import { User } from "./User";
import { randomUUID } from "node:crypto";

export class Tweet {
  private readonly _tweetId: string;
  content: string;
  type: "normal" | "reply";
  likes: User[] = [];
  user: User;
  private _replies: Tweet[] = [];
  likesAmount: number = 0;

  constructor(content: string, type: "normal" | "reply") {
    this._tweetId = randomUUID();
    this.content = content;
    this.type = type;
  }

  get replies(): Tweet[] {
    return this._replies;
  }

  reply(user: User, content: string) {
    const reply = new Tweet(content, "reply");
    reply.user = user;
    this.replies.push(reply);
    return reply;
  }

  showLikes(): void {
    const nomesCurtidas = this.likes.map((user) => user.name);
    console.log(
      `Usuários que curtiram este tweet: ${nomesCurtidas.join(", ")}`
    );
  }

  showReplies() {
    if (this.reply.length > 0) {
      this._replies.forEach((reply) => {
        console.log(`> @${reply.user.username} - ${reply.content}`);
      });
    } else {
      console.log("No replies.");
    }
  }
}
