//import Button from "./Button";
const Header = ({ title, description }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

Header.defaultProps = {
  title: "Crypto Tracker",
};

export default Header;
