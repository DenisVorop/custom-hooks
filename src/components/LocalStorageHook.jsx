import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LocalStorageHook = () => {
    const [user, setUser] = useLocalStorage('users', [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }])

    return (
        <div>
            <h2>LocalStorage custom hook</h2>
            <div>
                {user[0].id} {user[0].title}
            </div>
            <button onClick={() => setUser([...user, user[0].completed = !user[0].completed])}>
                Change status completed in localstorage
            </button>
        </div>
    )
}

export default LocalStorageHook
