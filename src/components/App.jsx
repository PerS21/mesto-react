import React, { useState, useEffect } from 'react';
import "../App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ImagePopup from "./ImagePopup.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";


import { CurrentUserContext } from './CurrentUserContext';
import api from '../utils/api.js';


function App() {

  const [currentUser, setСurrentUser] = useState('');

  useEffect(() => {
    api.getUser().then((res) => {
      setСurrentUser(res);
    }).catch(error => console.log(error))
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  function handleUpdateUser(name, description) {
    api.patchUserInfo(name, description)
      .then((res) => setСurrentUser(res))
      .catch(error => console.log(error))
      .finally(closeAllPopups)
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserImg(avatar)
      .then((res) => setСurrentUser(res))
      .catch(error => console.log(error))
      .finally(closeAllPopups)
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCards().then(res => setCards(res)).catch(error => console.log(error))
  }, []);

  function handleCardDelete(card) {
    const cardId = card._id;

    api.deleteCard(cardId).then(() => {
      setCards(cards.filter(card => card._id !== cardId))
    })
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard(name, link).then((res) => setCards([res, ...cards])).catch(error => console.log(error)).finally(() => closeAllPopups())
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} handleCardDelete={handleCardDelete} setCards={setCards} cards={cards} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit} />

          <PopupWithForm title='Вы уверены?' name='delete-card' isOpen='' onClose={closeAllPopups} submitButtonText='Да' />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
