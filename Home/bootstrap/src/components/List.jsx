import { AppName } from "./todo_components";
import Container from "./Container";
import SearchBar from "./FoodAdd";
import { useState } from "react";
import Item from "./listItem";

const List = () => {
  
  // function for removing specific item from an array
  function removeArrayItem(value, array) {
    array = array.filter((cur) => cur != value);
    console.log(array);
    return array;
  }

  // this is array of the food items
  let [healthyFoods, setHealthyFoods] = useState([
    "Spinach",
    "apple",
    "Ghee",
    "Greek Yogurt",
    "Sweet Potatoes",
    "Chia Seeds",
    "Berries",
  ]);

  // this hook handle line that is below the input field
  let [input, setInput] = useState("your food item");

  // this function handle line that is below the input field
  let handleOnChange = (event) => {
    let value = event.target.value;
    value = value.trim();
    if (value.length != 0) {
      setInput(event.target.value);
    } else {
      setInput("your food item");
    }
  };

  // this function handle submit button and make new List item
  let handleOnClick = (event) => {
    let value = event.target.previousSibling.value;
    value = value.trim();
    if (value.length != 0) {
      let copy = healthyFoods;
      copy = [...healthyFoods, value];
      setHealthyFoods(copy);
      event.target.previousSibling.value = "";
      setInput("your food item");
    }
  };

  // this hook manage selected item's list
  let [selectedItems, setSelectedItems] = useState([]);

  const handleOnBuy = (event, item) => {
    if (!selectedItems.includes(item)) {
      let newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
    } else {
      console.log("working");
      let newSelectedItems = removeArrayItem(item, selectedItems);
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <>
      <Container>
        <AppName content="Healthy Food"></AppName>
        <SearchBar
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
        />
        <p style={{ marginBlock: "10px" }}>{input}</p>
        {healthyFoods.length == 0 ? <h1>List is empty</h1> : null}
        <ul className="list-group">
          {healthyFoods.map((item) => {
            return (
              <Item
                key={item}
                value={item}
                Buy={selectedItems.includes(item)}
                OnBuy={(event) => {
                  handleOnBuy(event, item);
                }}
              />
            );
          })}
        </ul>
      </Container>

      {/* <Container>
        <p>this is data that is passed by child props</p>
      </Container> */}
    </>
  );
};

export default List;
