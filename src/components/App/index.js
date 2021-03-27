import React from 'react';

import './style.scss';

function App() {
  return (
    <form className="form">
      <input className="form__input" type="email" placeholder="Saisissez votre adresse e-mail..." />
      <input className="form__input" type="password" placeholder="Saisissez votre mot de passe..." />
      <input className="form__submit" type="submit" value="Se connecter" />
    </form>
  );
}

export default App;
