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

  sendTweet(tweet: Tweet): void {
    this._tweets.push(tweet);
    tweet.user = this;

    // Lógica para enviar um tweet
  }

  follow(user: User) {
    // Lógica para seguir um usuário
    if (user !== this && !this.following.includes(user)) {
      this.followers.push(user);
    }
  }

  showfollowrs(): void {
    // Mostra as pessoas que voce esta seguindo
    console.log(`Seguindo:`);
    const followers = this.followers.map((follower) => follower.name);
    console.log(followers);
  }

  showFeed() {}

  showTweets() {
    console.log(`@${this.username}`);
    this._tweets.forEach((tweet) => {
      console.log(`Tweet: ${tweet.content}, Type: ${tweet.type}`);
      console.log(
        `
Likes: ${tweet.likes} 
Replies: ${tweet.replies}
            `
      );
    });
  }

  liketweet(tweet: Tweet) {
    tweet.like(this);
  }
}
