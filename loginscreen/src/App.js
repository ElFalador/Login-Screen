
  import { useState } from 'react';

  import ksIMG from './pngwing.png'

  import './index.js'

  import './styles.css'

function App() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" id='login'>
            
            <span className="login-form-title">Bem Vindo!</span>
            
            <span className="login-form-title">
              <img src={ksIMG} alt="Kaio art" />
            </span>

            <div className="wrap-input">
              <input id='email'
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input id='password'
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#">Cria Conta.</a>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  
  );
}

export default App;
