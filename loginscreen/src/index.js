import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function emailIsCorrect(email, password) {
  return email.value == "kaio.a.schlickmann@gmail.com" && password.value == "290702";
}

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value == "" || password.value == "") {
    alert("Por favor preencha todos os campos.");
  }

  if (this.IsCorrect(email, password)) {
    alert(
      "Obrigado sr(a) " +
        email.value +
        ". \n Em breve nosso sistemas estará disponível para acesso do público"
    );
  } else {
    alert("Email ou senha incorretos");
  }
}


