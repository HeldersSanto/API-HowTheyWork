const content = document.getElementById('content');

fetch("https://jsonplaceholder.typicode.com/users")
  .then(Response => Response.json()).then(Users => {
    Users.forEach(Users => {
      const nomes = Users.name;
      const emails = Users.email;
      content.innerHTML += `
       <ul>
       <li>`+ nomes + `</li>
       <ul>
       <li>`+ emails + `</li>
       </ul>
       </ul>
       `;
    });

    /* resultado da requisição completa no console */
    console.log(Users)
  });

