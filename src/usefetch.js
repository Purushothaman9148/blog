import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, SetIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect((url) => {
        setTimeout(() => {
            fetch(url)
                .then(result => {
                    if (!result.ok) {
                        throw Error('could not fetch the date for that resource.');
                    }
                    return result.json()
                })
                .then(value => {
                    setData(value);
                    SetIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    SetIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return { data, isPending, error }
}

export default useFetch;