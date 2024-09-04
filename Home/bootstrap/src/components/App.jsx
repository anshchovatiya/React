import { AppName } from "./todo_components";
import AddToDo from "./AddToDo";
import ansh from "./App.module.css";
import ToDoItem from "./ToDoItem";
import Empty from "./EmptyTodoList";
import { useState, useReducer, act } from "react";
import { TodoListData } from "../store/TodoItemData";

function setData(currentState, action) {
  let data = currentState;
  if (action.type === "ADD_DATA") {
    data = [
      ...data,
      { todoText: action.data.Text, date: action.data.ToDoDate },
    ];
  } else if (action.type === "DELETE_DATA") { 
    data = data.filter((cur) => cur.todoText != action.data.Text);
  }
  return data;
}

function App() {
  // // this hook manage data of todo list
  // let [data, setData] = useState([]);

  // // this function handles add button
  // const handleAddButton = (Text, Date) => {
  //   let newData = [...data, { todoText: Text, date: Date }];
  //   setData(newData);
  // };

  // // this function handles delete button
  // const handleDeleteButton = (currentObj) => {
  //   let newObj = data.filter((cur) => cur.todoText != currentObj);
  //   setData(newObj);
  // };

  let [data, dispatchData] = useReducer(setData, []);

  // this function handles add button
  const handleAddButton = (Text, Date) => {
    let action = {
      type: "ADD_DATA",
      data: {
        Text: Text,
        ToDoDate: Date,
      },
    };
    dispatchData(action);
  };

 

  return (
    <TodoListData.Provider
      value={{
        todoData: data,
        addButton: handleAddButton,
        dispatchData,
      }}
    >
      <div className={ansh.ToDoMain}>
        <AppName content="ToDo List"></AppName>
        <AddToDo></AddToDo>
        <Empty></Empty>
        {/* this will render all todo items  */}
        <div className={ansh["itemContainer"]}>
          <ToDoItem />
        </div>
      </div>
    </TodoListData.Provider>
  );
}

export default App;
