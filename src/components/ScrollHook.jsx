import React from 'react';
import useScroll from "../hooks/useScroll";

const ScrollHook = () => {
    const [todos, setTodos] = React.useState([])
    const [page, setPage] = React.useState(1)
    const limit = 5
    const parentRef = React.useRef()
    const childRef = React.useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

    return (
        <div>
            <h2>Scroll cusom hook</h2>
            <div ref={parentRef} style={{ height: '300px', overflow: 'auto' }}>
                {todos.map(todo =>
                    <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                        {todo.id}. {todo.title}
                    </div>
                )}
                <div ref={childRef} style={{ height: 20, background: 'green' }} />
            </div>
        </div>
    );
};

export default ScrollHook;
