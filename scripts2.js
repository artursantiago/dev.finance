async function logar(event) {
  event.preventDefault();

  const username = document.querySelector('#username').nodeValue;
  const password = document.querySelector('#password').nodeValue;

  let auth = btoa(username + ':' + password);

  const response = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': 'Basic ' + auth,
    }
  });
  const data = await response.json();
  
  document.querySelector('#username').nodeValue = '';
  document.querySelector('#password').nodeValue = '';
  
  validar(data);
}

const validar = (data) => {
  if (data.message == 'Bad credentials') {
    alert('Credenciais Erradas');
  } else {
    const result = 
    `
      <img class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/>
      <br>
      <h1>${data.login}</h1>
      <br>
      <a target="_blank" href="${data.html_url}">
        <button class="btn btn-success">See Profile</button>
      </a>
    `;

    document.querySelector('#result').nodeValue = result;
  }
}