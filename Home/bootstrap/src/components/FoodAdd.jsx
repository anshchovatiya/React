import sty from "./FoodAdd.jsx";

const SearchBar = ({ handleOnChange ,handleOnClick}) => {
  return (
    <>
      <div className="FoodEntries">
        <input
          type="text"
          placeholder="Enter the food name"
          id="FoodInputTag"
          onChange={handleOnChange}
        />
        <button className="FoodSubmit" onClick={handleOnClick}>Submit</button>
      </div>
    </>
  );
};

export default SearchBar;
