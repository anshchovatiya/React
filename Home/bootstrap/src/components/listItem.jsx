const Item = ({value,Buy,OnBuy}) => {
  // this variable contains all the processed data in form of JSX
  return (
    <li key={value} className={`${Buy && "active"} list-group-item List`}>
      <p className="bg-color">{value}</p>
      
      <button onClick={OnBuy}>
        Buy
      </button>
      <button
        onClick={(event) => {
          console.log(
            event.target.previousElementSibling.innerText + " Deleted"
          );
          event.target.parentElement.remove();
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
