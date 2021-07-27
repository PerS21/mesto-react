import "../App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />

        <div className="popup profile-edit-popup">
          <div className="popup__container popup__container_content-form">
            <form name="profile-edit-form" className="form profile-edit-form">
              <h2 className="form__title">Редактировать профиль</h2>
              <div className="form__inputs">
                <input
                  id="name"
                  required
                  minLength="2"
                  maxLength="40"
                  name="fild_name"
                  type="text"
                  placeholder="Название"
                  className="form__input profile-edit-form__input-fild-name"
                />
                <span id="name-error" className="form__input-error"></span>
                <input
                  id="about"
                  required
                  minLength="2"
                  maxLength="200"
                  name="fild_about"
                  type="text"
                  placeholder="Проффесия"
                  className="form__input profile-edit-form__input-fild-about"
                />
                <span id="about-error" className="form__input-error"></span>
              </div>
              <button
                type="submit"
                className="form__button-save profile-edit-form__button-save"
              >
                Сохранить
              </button>
              <button
                type="button"
                className="popup__close-button button profile-edit-form__close-button"
              ></button>
            </form>
          </div>
        </div>

        <div className="popup profile-img-edit-popup">
          <div className="popup__container popup__container_content-form">
            <form
              name="profile-img-edit-popup"
              className="form profile-img-edit-popup"
            >
              <h2 className="form__title">Обновить аватар</h2>
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
              <button
                type="submit"
                className="form__button-save profile-img-edit-popup__button-save"
              >
                Сохранить
              </button>
              <button
                type="button"
                className="popup__close-button button profile-img-edit-popup__close-button"
              ></button>
            </form>
          </div>
        </div>

        <div className="popup add-place-popup">
          <div className="popup__container popup__container_content-form">
            <form name="add-place-form" className="form add-place-form">
              <h2 className="form__title">Новое место</h2>
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
              <button
                type="submit"
                className="form__button-save add-place-form__button-save"
              >
                Сохранить
              </button>
              <button
                type="button"
                className="popup__close-button button add-place-form__close-button"
              ></button>
            </form>
          </div>
        </div>

        <ImagePopup />

        <template id="template">
          <li className="element">
            <img src="#" alt="Картинка элемента" className="element__img" />
            <div className="element__info">
              <h2 className="element__text">Текс элемента</h2>
              <button type="button" className="element__heart"></button>
            </div>
            <button type="button" className="element__trash button"></button>
          </li>
        </template>
      </div>

      <script src="./utils/initialCards.js"></script>
      <script type="module" src="./scripts/script.js"></script>
    </div>
  );
}

export default App;
