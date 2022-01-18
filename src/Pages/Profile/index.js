import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.css';

function Profile() {
  const mailUser = JSON.parse(localStorage.getItem('user'));
  let getUser = '';
  if (mailUser) {
    getUser = mailUser.email;
  }
  return (
    <section className="profile-page">
      <Header titlePage=" Perfil " />
      <div className="profile-page-container">
        <p className="profile">Meu Perfil</p>
        <p data-testid="profile-email" className="email">{ getUser }</p>
        <div className="profile-buttons-container">
          <Link to="/receitas-feitas">
            <Button
              className="btn-done"
              variant="primary"
              type="button"
              data-testid="profile-done-btn"
            >
              Receitas Feitas
            </Button>
          </Link>
          <Link to="/receitas-favoritas">
            <Button
              className="btn-favorite"
              variant="primary"
              type="button"
              data-testid="profile-favorite-btn"
            >
              Receitas Favoritas
            </Button>
          </Link>
          <Link to="/">
            <Button
              className="btn-logout"
              variant="primary"
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => localStorage.clear() }
            >
              Sair
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
