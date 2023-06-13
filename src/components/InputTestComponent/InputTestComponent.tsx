import useLocalStorage from "../../hooks/useLocalStorage";

type Props = {
    localStorageKey: string;
    initialValue: string
}

const InputTestComponent = ({localStorageKey, initialValue}: Props) => {
    const [input, setInput] = useLocalStorage(localStorageKey, initialValue)
    const handleChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value;
        setInput(value);
        console.log(input)
    };
    return <input value={input} onChange={handleChange}/>
};

export default InputTestComponent;