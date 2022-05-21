import React from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = React.useState(() => {
        const jsonValue = localStorage.getItem(key)

        if (jsonValue !== null)
            return JSON.parse(jsonValue)

        return initialValue
    })

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
