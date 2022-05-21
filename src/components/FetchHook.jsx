import React from 'react';
import { useFetch } from '../hooks/useFetch';

const FetchHook = () => {
    const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/todos/1')

    return (
        <div>
            <h2>Fetch custom hook</h2>
            {isLoading ? <div>Loading...</div> : <div>Data: {JSON.stringify(data, 2)}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    )
}

export default FetchHook
