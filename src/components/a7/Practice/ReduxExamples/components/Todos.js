// Consumer: in charge of rendering content
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";



const Todos = () => {

  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: "", done: false})
  const dispatch = useDispatch();

  // used when typing, and modify local state: useState
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      ...todo,
      do: doValue
    }
    // set new todo
    setTodo(newTodo);
  }

  // update Todo
  const updateTodoClickHandler = (todo) => {
    const action = {
      type: 'update-todo',
      todo
    };
    dispatch(action);
  }

  // uses dispatch to manage global state
  // Create Todo
  const createTodoClickHandler = () => {
    const action = {
      type: 'create-todo',
      todo
    };
    dispatch(action);
  }

  // Delete Todo
  // delete operation
  // pass in the todo we want to delete here.
  const deleteTodoClickHandler = (todo) => {
    const action = {
      type: 'delete-todo',
      todo
    };
    dispatch(action);
  }


  // ---------------------------------------------

  return(
      <>
        <h3>Todos</h3>
        <li className = "list-group-item">
          <input
            onChange = {todoChangeHandler}
            value = {todo.do}
            className = "form-control"
          />

          <button
              onClick={createTodoClickHandler}
              className="btn btn-primary">
            Create New Todo
          </button>


        </li>

        <ul className = "list-group">
          {
            todos.map(
                todo =>
                    <li className="list-group-item">
                      <input
                          checked={todo.done}
                          onChange={
                            (event)=>
                            updateTodoClickHandler({...todo, done: event.target.checked})
                          }
                          type = "checkbox"
                      />
                      {todo.do}
                      <button
                        onClick={()=>deleteTodoClickHandler(todo)}
                        className="btn btn-danger float-end"
                      >
                        Delete
                      </button>
                    </li>
            )
          }
        </ul>
      </>
  );

};


export default Todos;


