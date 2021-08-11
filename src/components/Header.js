import vectorLogo from "../../src/images/VectorLogo.svg";

function Header() {
  return (
    <header className="header">
      <img src={vectorLogo} alt="место" className="header__img" />
    </header>
  );
}

export default Header;
