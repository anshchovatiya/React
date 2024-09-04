import { useContext } from "react";
import { TodoListData } from "../store/TodoItemData";

const Empty = () => {
    
    let {todoData} = useContext(TodoListData);

    return (todoData.length === 0 && <p className="EmptyTodoList">Always be happy</p>)
}

export default Empty;