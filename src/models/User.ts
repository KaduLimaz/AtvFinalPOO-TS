import { Tweet } from "./Tweet";

import { randomUUID } from "node:crypto";

export class User {
  private static users: User[] = [];

  private readonly _id: string;
  name: string;
  email: string;
  username: string;
  private _password: string;
  private _tweets: Tweet[] = [];
  private following: User[] = [];
  private followers: User[] = [];

  constructor(name: string, email: string, username: string, password: string) {
    this._id = randomUUID(); // Gera um novo ID único
    this.name = name;
    this.email = email;
    this.username = username;
    this._password = password;

    // Verifica se o Username ou ID já existem
    if (User.userExistsByUsername(username)) {
      throw new Error("Username ou ID já existem. Por favor, escolha outro.");
    }

    User.users.push(this);
  }

  get tweets(): Tweet[] {
    return this._tweets;
  }

  private static userExistsByUsername(username: string): boolean {
    return User.users.some((user) => user.username === username);
  }

  //O método some() é um método de instância do tipo Array que testa se pelo menos um dos elementos do array passa no teste implementado pela função atribuída. Ele retorna true se algum dos elementos do array passa no teste especificado pela função de callback, caso contrário, retorna false.

  sendTweet(content: string): Tweet {
    const tweet = new Tweet(content, "normal");
    this._tweets.push(tweet);
    return tweet;

    // Lógica para enviar um tweet
  }

  follow(user: User) {
    // Lógica para seguir um usuário
    if (user !== this && !this.following.includes(user)) {
      this.following.push(user);
    }
  }

  showfollowing(): void {
    // Mostra as pessoas que voce esta seguindo
    console.log(`Seguindo:`);
    const followers = this.following.map((follower) => follower.name);
    console.log(followers);
  }

  showFeed() {
    // Mostraro feed completo
    console.log(`<${this.username} Feed >`);
    this.showTweets();

    this.following.forEach((user) => {
      user.showTweets();
    });
  }

  showTweets(): void {
    // Mostrar todos os tweets
    this._tweets.forEach((tweet) => {
      console.log(`@${this.username}: ${tweet.content}
    `);
      if (tweet.likesAmount >= 2) {
        console.log(
          `[${tweet.likes[0].username} and other ${
            tweet.likes.length - 1
          } user liked this]`
        );
      } else if (tweet.likesAmount === 1) {
        console.log(`[${tweet.likes[0].username} liked this]`);
      }
      if (tweet.reply.length !== 0) {
        tweet.showReplies();
      }
    });
  }

  likeTweet(tweet: Tweet) {
    if (!tweet.likes.includes(this)) {
      tweet.likes.push(this);
      tweet.likesAmount++;
      console.log(`curtido por ${this.name}`);
    } else {
      console.log(`tweet ja curtido por ${this.name}`);
    }
  }
}
