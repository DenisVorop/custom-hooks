import React from 'react';

export const useOutside = (initialVisible) => {
    const [isShow, setIsShow] = React.useState(initialVisible)
    const ref = React.useRef(null)

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsShow(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => document.removeEventListener('click', handleClickOutside, true)
    }, [])

    return { ref, isShow, setIsShow }
}
