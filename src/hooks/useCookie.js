import React from 'react';
import Cookies from 'js-cookie' // npm i js-cookie

export const useCookie = (name, initialValue) => {
    const [value, setValue] = React.useState(() => {
        const cookie = Cookies.get(name)

        if (cookie)
            return cookie

        Cookies.set(name, initialValue)
        return initialValue
    })

    const updateCookie = React.useCallback((newValue, options) => {
        Cookies.set(name, newValue, options)
        setValue(newValue)
    }, [name])

    const deleteCookie = React.useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    }, [name])

    return [value, updateCookie, deleteCookie]
}
