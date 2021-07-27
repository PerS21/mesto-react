import VectorLogo from "../../src/images/VectorLogo.svg";

function Header() {
  return (
    <header className="header">
      <img src={VectorLogo} alt="место" className="header__img" />
    </header>
  );
}

export default Header;
