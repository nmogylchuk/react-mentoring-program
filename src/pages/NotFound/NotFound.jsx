import React from 'react';
import { Link } from 'react-router-dom';
import 'pages/NotFound/NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title" >Page Not Found</h1>
      <Link className="not-found__button" to="/">Go back to home</Link>
      <img className="not-found__image" src="https://hitechmind.it/wp-content/uploads/2020/08/Errore-404-le-soluzioni-per-risolverlo.jpg" alt="page not found" />
    </div>
  )
};

export default NotFound;
