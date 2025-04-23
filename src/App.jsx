    import {useEffect, useState} from 'react'
    import './App.css'
    import TodoItem from "./component/todoItem.jsx";

    function App() {
        const [todoList, setTodoList] = useState([])
        const [loading, setLoading] = useState(true)

        const getToDoItem = async (itemId)=>{
            console.log("Item Id",itemId)
            const response = await fetch(`https://dummyjson.com/todos/${itemId}`)
            return response.json()
        }

        const fetchToDolist = async ()=>{
            const response =  await fetch("https://dummyjson.com/todos")
            return response.json()
        }

        useEffect(() => {
            const fetchData = async () => {
                const data = await fetchToDolist();
                setTodoList(data.todos);
                setLoading(false)
            };
            fetchData();
        }, []);


        return (
          <>
            <h1 className="text-3xl font-bold underline">
              Simple ToDO List App
                {loading && <div>Loading...</div>}
            </h1>
              <div>
                  {todoList.length > 0? (todoList.map((item) => {
                      return <TodoItem
                          todo={item}
                          key={item.id}
                          handlegetToDoListItem = {getToDoItem}
                      >
                      </TodoItem>
                  })): <div> No data</div>}
              </div>


          </>
      )
    }

    export default App
