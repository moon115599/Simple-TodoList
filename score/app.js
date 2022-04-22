const JsonLocalStorage = () =>{

}

const TodoHeader = () => (
  <h1 className="text-center">Todo List</h1>
)

const TodoForm = ({addList}) => {
  const TodoForm = document.querySelector(".TodoForm input");

  const onTodoSubmit = (e) =>{
    e.preventDefault();
    const newTodo = e.target[0].value;
    addList(newTodo);
    e.target[0].value= "";
  }
  return(
    <form onSubmit={onTodoSubmit} className="TodoForm text-center mb-3">
      <input required className="form-control mb-3" type="text"/>
      <button className="btn btn-primary">Add Todo</button>
    </form>
  )
}
const TodoList = ({todos}) => {

  const onDeleteClick = (e) => {
    e.target.offsetParent.remove();
  }
  const onInputChecked = (e) => {
    const todoSpan =  e.target.offsetParent.children[1];
    todoSpan.classList.toggle("text-decoration-line-through");
    todoSpan.classList.toggle("text-danger");
  }
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
          <li className="TodoList_list list-group-item d-flex justify-content-between align-items-center">
            <input onChange={onInputChecked} type="checkbox"/>
            <span key={index}>{todo}</span>
            <button onClick={onDeleteClick} className="btn btn-danger ">Delete</button>
          </li>
        )
      )
      }
    </ul>
  )
}

const TodoApp = () => {

  const [todos, setTodos] = React.useState(
    ["write my todo list",
      "learn react",
      "learn Webpack",
      "learn ES6",
      "learn Routing"])

  // const TodoForm = document.querySelector(".TodoForm input");
  const onTodoSubmit=(newTodo) => {
    setTodos([...todos,newTodo]);
  }

  return (
    <div className="container mt-3">
      <TodoHeader></TodoHeader>
      <TodoForm addList={onTodoSubmit}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

ReactDOM.render(<TodoApp/>, document.getElementById('todo'));