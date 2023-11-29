Realize o desenvolvimento das seguintes features para cumprir com os
requisitos da avaliação:

## 1 Cadastro de usuários
Deve ser possível criar usuários na aplicação.
Os campos ID e Username devem ser únicos por
usuário, sendo que o ID pode ser gerado
automaticamente pela aplicação.

(OK)

## 2 Cadastro de tweets
Deve ser possível criar tweets por usuário. Cada
usuário poderá criar N tweets e um tweet pertence a
somente um usuário (relacionamento 0-N).

O campo ID deve ser único e pode ser gerado
automaticamente pela aplicação.
Cada tweet possui um tipo obrigatório (normal ou
reply).

()

## 3 Exibição de tweets
Deve ser possível exibir um tweet na aplicação. Como
estamos no back-end, utilize o console.log( ).
A exibição de um tweet deve ser feita da seguinte
forma:

@<username>: <conteúdo>

<likes> *
<replies> *

exemplo: 
 @daphne: Olá mundo!
  [ 0 likes ] 
    > @Bruna: hey!
    
* verificar features #7 e #8 para maiores
informações sobre exibição de likes e replies.

## 4 Followers

Deve ser possível para um usuário seguir outro
usuário, exceto a si mesmo.
O usuário deve ter acesso a lista de usuário a quem
segue.

## 5 Like em tweets  

Deve ser possível para um usuário curtir os tweets de
outros usuários.
Um tweet (normal ou reply) pode ter 0 ou N curtidas.

## 6 Reply em tweets

Deve ser possível para um usuário responder a tweets
de outros usuários.
A resposta a um tweet deve ser um novo tweet com o
tipo “reply”.
Um tweet (normal ou reply) pode ter 0 ou N replies.

## 7 Exibição de tweets com likes

Deve ser possível exibir tweets com a informação de
seus likes recebidos.

@<username>: <conteúdo>

<likes>

A exibição dos likes varia dependendo da quantidade:
● Sem like - não exibir.
● 1 like – “@<username> curtiu”.
● 2 ou + likes – “@<username1> e mais X
usuários curtiram”.

## 8 Exibição de tweets com replies

Deve ser possível exibir tweets com os seus replies.

@<username>: <conteúdo>

<replies>

Adicione um indicador ao início do reply para indicar
que se trata de uma resposta (p.ex. o caractere “>”).

@username: conteúdo do tweet original.
> @username2: conteúdo do reply 1.
> @username3: conteúdo do reply 2.

## 9 Feed de tweets

Um usuário poderá exibir o seu feed de tweets. O feed
é composto por seus tweets e pelos tweets dos
usuários a quem segue.
Na exibição do feed, cada tweet deverá ser exibido
conforme features anteriores: com seu conteúdo, seus
likes e replies.