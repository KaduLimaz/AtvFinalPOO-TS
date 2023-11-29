import { Tweet } from "./Tweet";
import { randomUUID } from "node:crypto";

export class User {
   private static users: User[] = [];

   private _id: string;
   name: string;
   email: string;
   username: string;
   private _password: string;
   private _tweets: Tweet[];

   constructor(name: string, email: string, username: string, password: string) {
       this._id = randomUUID(); // Gera um novo ID único
       this.name = name;
       this.email = email;
       this.username = username;
       this._password = password;

       // Verifica se o Username ou ID já existem
       if (User.userExistsByUsername(username)) {
           throw new Error('Username ou ID já existem. Por favor, escolha outro.');
       }

       User.users.push(this);
   }

   private static userExistsByUsername(username: string): boolean {
       return User.users.some(user => user.username === username);
   }

 

   sendTweet(tweet: Tweet) {
       // Lógica para enviar um tweet
   }

   follow(user: User) {
       // Lógica para seguir um usuário
   }

   showFeed() {
       // Lógica para mostrar o feed do usuário
   }

   showTweets() {
       // Lógica para mostrar os tweets do usuário
   }
}

