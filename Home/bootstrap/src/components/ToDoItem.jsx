import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoListData } from "../store/TodoItemData";

const ToDoItem = () => {
  const { todoData, dispatchData } = useContext(TodoListData);

   // this function handles delete button
   const handleDeleteButton = (currentObj) => {
    let action = {
      type: "DELETE_DATA",
      data: {
        Text: currentObj,
      },
    };
    dispatchData(action);
  };

  return (
    <div>
      {todoData.map((cur, index) => {
        return (
          <div className="row data-rows" key={`item${index}`}>
            <div className="col-6">{cur.todoText}</div>
            <div className="col-4">{cur.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="TodoAddButton2"
                onClick={() => {
                  handleDeleteButton(cur.todoText);
                }}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItem;


