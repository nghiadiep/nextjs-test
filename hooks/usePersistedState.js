import { useState, useEffect } from 'react'

function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(defaultValue)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem(key))?.length) {
            setState(JSON.parse(localStorage.getItem(key)))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState