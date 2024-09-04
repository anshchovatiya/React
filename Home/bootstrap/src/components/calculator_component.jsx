import sty from "./Calculator.module.css";

const Button = ({ value, handleClick }) => {


  if (value === "0") {
    return (
      <button className={`${sty.colspan_2} ${sty.btn}`} onClick={handleClick}>
        {value} 
      </button>
    );
  }

  return (
    <button className={sty.btn} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
