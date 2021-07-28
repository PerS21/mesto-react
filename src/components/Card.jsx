function Card(props) {
    function handleClick() {
        props.onCardClick(props.card.link);
      }  
    
    return (
        <li className="element" onClick={handleClick}>
            <img src={props.card.link} alt="Картинка элемента" className="element__img" />
            <div className="element__info">
                <h2 className="element__text">{props.card.name}</h2>
                <div>
                    <button type="button" className="element__heart"></button>
                    <p className="element__heart-quantity">{props.card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="element__trash button"></button>
        </li>
    );
}

export default Card;