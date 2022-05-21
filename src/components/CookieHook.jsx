import React from 'react';
import { useCookie } from '../hooks/useCookie';

const CookieHook = () => {
    const [value, updateCookie, deleteCookie] = useCookie('token', '')

    return (
        <div>
            <h2>Cookie custom hook</h2>
            <div>Token: {value}</div>
            <button onClick={() => updateCookie(String(Date.now()))}>
                change token
            </button>
            <button onClick={deleteCookie}>
                remove token
            </button>
        </div>
    )
}

export default CookieHook
