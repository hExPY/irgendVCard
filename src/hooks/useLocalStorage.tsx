import { useState } from "react"

const useLocalStorage = (key: string, initialValue: string) => {
    const [state, setState] = useState(() => {
        try {
            const localStorageValue = window.localStorage.getItem(key)
            const initializedValue = localStorageValue ? JSON.parse(localStorageValue) : initialValue
            setState(initializedValue)
            console.log(initializedValue, "dddddddd")
            return initializedValue
        } catch (error) {
            console.log(error)
        }
    })

    const setValue = (value: (arg0: any) => any) => {
        try {
            const valueToStore = value instanceof Function ? value(state) : value
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
            setState(value)
        } catch (error) {
            console.log(error)
        }
    }

    return [state, setValue]
}

export default useLocalStorage