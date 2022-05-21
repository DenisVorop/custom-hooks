/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default function (request) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            request()
                .then(response => setData(response.data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }, 1000)
    }, [])

    return [data, loading, error]
};
