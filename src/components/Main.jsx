import pencil from "../../src/images/Pencil.svg";
import addPlace from "../../src/images/Plus.svg";
import api from '../utils/api.js'
import React, { useState, useEffect } from 'react';
import Card from './Card.jsx'

function Main(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCards().then(res => setCards(res)).catch(error => console.log(error))
  }, []);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUser().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }).catch(error => console.log(error))
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__profile-info">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="аватар" className="profile__avatar-img" />
            <div className="profile__avatar-edit">
              <img
                className="profile__avatar-edit-icon"
                src={pencil}
                alt="Изменить"
              />
            </div>
          </button>
          <div className="profile__text">
            <div className="profile__name-line">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button button"
                onClick={props.onEditProfile}
              >
                <img src={pencil} alt="Изменить" />
              </button>
            </div>
            <p className="profile__prof">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={props.onAddPlace}
        >
          <img src={addPlace} alt="Добавить" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card card={card} onCardClick={props.onCardClick} key={card._id}/>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;