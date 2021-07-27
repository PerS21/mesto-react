function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".profile-img-edit-popup")
      .classList.add("popup_is-opened");
  }

  function handleEditProfileClick() {
    document
      .querySelector(".profile-edit-popup")
      .classList.add("popup_is-opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".add-place-popup").classList.add("popup_is-opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__profile-info">
          <button className="profile__avatar" onClick={handleEditAvatarClick}>
            <img src="" alt="аватар" className="profile__avatar-img" />
            <div className="profile__avatar-edit">
              <img
                className="profile__avatar-edit-icon"
                src="<%=require('./images/Vector.svg')%>"
                alt="Изменить"
              />
            </div>
          </button>
          <div className="profile__text">
            <div className="profile__name-line">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                type="button"
                className="profile__edit-button button"
                onClick={handleEditProfileClick}
              >
                <img src="<%=require('./images/Vector.svg')%>" alt="Изменить" />
              </button>
            </div>
            <p className="profile__prof">Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={handleAddPlaceClick}
        >
          <img src="<%=require('./images/Vectoradd.svg')%>" alt="Добавить" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
