import calculator from "../assets/img/calculator.svg";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={calculator} alt="Calculator icon" />
        <h1>React Counter</h1>
      </div>
    </header>
  );
};

export default Header;
