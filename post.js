const button = document.querySelector('form');
button.addEventListener('submit', function (e) {
  e.preventDefault();
  const Title = document.getElementById('title').value;
  const Body = document.getElementById('body').value;
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: Title,
      body: Body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(response => response.json())
    .then(json => console.log(json))
})
