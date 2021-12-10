import List from './List';
// const TodoList = () => (
//   <>

//   </>
// )

// const TodoList = ({props here}) => {
const ListItem = ({ grocery_list, listName}) => {
  return (
    <>
      <h1>{listName} List</h1>
      <ul>
        {
          grocery_list.map( list =>
            // <li>{todo.title}</li>
            // <Todo id={todo.id} title={todo.title} desc={todo.desc} complete={todo.complete} />
            <List {...list} />
          )
        }
      </ul>
    </>
  )
}


export default ListItem;