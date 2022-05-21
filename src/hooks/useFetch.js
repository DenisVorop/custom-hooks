import React from 'react';

export const useFetch = (url) => {
    const [data, setData] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(url)
                const data = await response.json()

                setData(data)
            }
            fetchData()
        } catch (error) {
            setError(error.message)
        } finally {
            setTimeout(() => setIsLoading(false), 3000)
        }
    }, [url])

    return [data, isLoading, error]
}
