# API-HowTheyWork
## O que é?
API é a sigla para Application Programing Interface 
_não se preocupe em gravar isso_

Para facilitar pense da seguinte forma: <br/>
Em um restaurante há uma cozinha com mantimentos que podem ser consumidos por você.
Eles podem ser apresentados na mesa, ou em uma estufa para os clientes.

Igualmente: no lado do servidor há serviços (obviamente). Sejam imagens,
dados de usuários, arquivos em um banco de dados... e eles estão prontos para serem _"consumidos"_
ou apresentados.

Porém, em um restaurante não é você mesmo que entra na cozinha e pega o alimento.
Para isso há o garçom. Que __faz a ponte entre o servidor e o cliente__.

API é essa ponte. Por meio dela fazemos pedidos e recebemos nosso conteúdo. Mas como? <br/>

## Como fazer requisições? 
Há diversas formas de fazer isso. Uma delas como observada no primeiro exemplo no arquivo _Api.js_
é usando o __fetch__.

Usando apenas um argumento o fetch está fazendo uma requisição à url apresentada e sera retornado uma
_response_ (resposta). 
```como quando pedimos algo ao garçom e ele nos diz "ok, recebi seu pedido"```
Mas um "ok" não é só o que queremos. Precisamos recebe nosso pedido, ver ele.
Nesse caso nossa requisição é para recebermos um array de objetos contendo uma lista de usuários.
Para visualizar precisamos converter para __json__, _então_ depois de pedir e receber a confirmação do pedido
reforçamos como que dizendo "então agora me mostra meu pedido!". <br/>
O "então" é o próprio _.then_ e ele significa que depois de o pedido ser feito pegue a _response_ e usando 
_response.json()_ transformamos a simples confirmação em algo legível. <br/>

E mais uma vez: _Então_ agora com o json em mãos dizemos o que queremos fazer. No exemplo em código, apresentar
o resultado no console. <br/>
Com nosso resultado em mãos e um pouco de _destructuring_ podemos apresentar dinamicamente dentro de uma div.
