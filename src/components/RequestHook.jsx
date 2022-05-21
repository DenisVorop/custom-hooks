import axios from "axios";
import useRequest from "../hooks/useRequest";

function RequestHook() {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
    }

    if (loading) {
        return <h2 style={{height:'460px'}}>Идет загрузка...</h2>
    }

    if (error) {
        return <h2 style={{height: '460px'}}>Произошла ошибка при загрузке данных</h2>
    }

    return (
        <div style={{height:'460px'}}>
            <h2>Request custom hook</h2>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                    {todo.id}. {todo.title}
                </div>
            )}
        </div>
    );
}

export default RequestHook;
