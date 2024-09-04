import { useRef, useContext } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { TodoListData } from "../store/TodoItemData";

const AddToDo = () => {
  // this hooks will manage todo Text and date
  let content = useRef("");
  let date = useRef("");

  const {addButton} = useContext(TodoListData);

  const addNewItem = () => {
    let text = content.current.value;
    let Date = date.current.value;

    if (text.length != 0 && Date.length != 0) {
      addButton(text, Date);
      content.current.value = "";
      date.current.value = "";
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
  };

  return (
    <form className="row addToDo" onSubmit={handleFormSubmit}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo here"
          name="content"
          id="content"
          ref={content}
        />
      </div>
      <div className="col-4">
        <input type="date" name="todoDate" id="todoDate" ref={date} />
      </div>
      <div className="col-2">
        <button className="TodoAddButton" onClick={addNewItem}>
          <RiAddLargeFill />
        </button>
      </div>
    </form>
  );
};

export default AddToDo;
