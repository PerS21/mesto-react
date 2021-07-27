function ImagePopup() {
  return (
    <div className="popup imgPopup">
      <div className="popup__container popup__container_content-img">
        <img className="imgPopup__img" src="#" alt="Альт картинки" />
        <p className="imgPopup__text">Текс карточки</p>
        <button
          type="button"
          className="popup__close-button button imgPopup__close-button"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
