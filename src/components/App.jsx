import React, { useState, useEffect } from 'react';
import "../App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ImagePopup from "./ImagePopup.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import EditProfilePopup from "./EditProfilePopup.jsx";
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <PopupWithForm title='Обновить аватар' name='profile-img-edit' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitButtonText='Сохранить'>
            <div className="form__inputs">
              <input
                id="avatar"
                required
                name="fild_img"
                type="url"
                placeholder="Ссылка на картинку"
                className="form__input profile-img-edit-popup__input-fild-link"
              />
              <span id="avatar-error" className="form__input-error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm title='Новое место' name='add-place' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitButtonText='Сохранить'>
            <div className="form__inputs">
              <input
                id="place"
                required
                minLength="2"
                maxLength="30"
                name="fild_place"
                type="text"
                placeholder="Название"
                className="form__input add-place-form__input-fild-text"
              />
              <span id="place-error" className="form__input-error"></span>
              <input
                id="img"
                required
                name="fild_img"
                type="url"
                placeholder="Ссылка на картинку"
                className="form__input add-place-form__input-fild-link"
              />
              <span id="img-error" className="form__input-error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm title='Вы уверены?' name='delete-card' isOpen='' onClose={closeAllPopups} submitButtonText='Да' />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
