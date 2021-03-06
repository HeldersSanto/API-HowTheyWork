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
para isso há o garçom. Que __faz a ponte entre o servidor e o cliente__.

API é essa ponte. Por meio dela fazemos pedidos e recebemos nosso conteúdo. Mas como? <br/>

## Como fazer requisições? 
Há diversas formas de fazer isso. Uma delas como observada no primeiro exemplo no arquivo _Api.js_
é usando o __fetch__.

Usando apenas um argumento o fetch está fazendo uma requisição (GET) à url apresentada e será retornado uma
_respose_ (resposta). 
```como quando pedimos algo ao garçom e ele nos diz "ok, recebi seu pedido"```
Mas um "ok" não é só o que queremos. Precisamos recebe nosso pedido, ver ele.
Nesse caso nossa requisição é para recebermos um array de objetos contendo uma lista de usuários.
Para visualizar precisamos converter para __json__, _então_ depois de pedir e receber a confirmação do pedido
reforçamos como que dizendo "__então__ agora me mostra meu pedido!". <br/>
O "então" é o próprio _.then_ e ele significa que depois de o pedido ser feito pegue a _response_ e usando 
_response.json()_ transformamos a simples confirmação em algo legível. <br/>

E mais uma vez: _Então_ agora com o json em mãos dizemos o que queremos fazer. No exemplo em código, apresentar
o resultado no console. <br/>
Com nosso resultado em mãos e um pouco de _destructuring_ podemos apresentar dinamicamente dentro de uma div.

## Postando algo

Talvez você precise enviar alguma coisa para o servidor, e não pedir.
Uma das formas de fazer isso é por meio do método __POST__ como pode ser visto clicando no link _Ir para post_.

No arquivo _post.js_ percebemos que armazenamos o conteúdo do input, que está no  form em _post.html_, em constantes.

Usamos uma função que ao receber ordem de envio do form, faz uma "requisição" a uma URL mas agora usando um segundo parâmetro: um objeto! <br/>
Nele especificamos:
  - O _método_ daquele contato com o servidor que no caso era do tipo POST ou seja estamos enviando algo.

  - Depois em forma de texto dizemos o que vai ter no _corpo_ dessa postagem: titulo, corpo e id do usuário que esta fazendo a postagem.
  
  - E ainda um _headers_, usado pelo servidor para facilitar a leitura e entender aquela postagem.

Depois dos dois parâmetros do fetch, usamos mais uma vez o _.then_ para dizer o que queremos fazer depois que o 
fetch for realizado. Nesse caso que usamos apenas um exemplo de postagem, recebemos a confirmação por meio de um
console.log da própria postagem. 
Então o response da requisição é transformado em json e de forma simplificada é apresentada no console.
