/* Import function useState() from React */

const Button = ({ counter, setCounter, value }) => {
  return (
    <button
      onClick={() => {
        value === "-" && setCounter(counter - 1);
        value === "+" && setCounter(counter + 1);
        value === "Reset" && setCounter(0);
      }}
    >
      {value}
    </button>
  );
};

export default Button;
