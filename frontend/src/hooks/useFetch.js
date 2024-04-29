import { useEffect, useState } from 'react';

const useFetch = ({ url, type = 'GET', headers = {}, body = null, isCache, cacheKey }) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                let existingValue = isCache && JSON.parse(sessionStorage.getItem(cacheKey));
                if (isCache && existingValue) {
                    setData(existingValue)
                } else {
                    let resp = await fetch(url, { method: type, body, headers });
                    let response = await resp.json();
                    setData(response)
                    isCache && sessionStorage.setItem(cacheKey, JSON.stringify(response))
                }

            } catch (e) {
                setError(e.message)
            }
            setIsLoading(false);
        })()
    }, []);

    return { error, data, isLoading }
}

export default useFetch;