import {useApplicationStore} from "../../lib/store"

type Props = {
    localStorageKey: string;
    initialValue: string
}

const InputTestComponent = ({localStorageKey, initialValue}: Props) => {
    const content = useApplicationStore(state => state.content)
    const setContent = useApplicationStore(state => state.setContent)

    const handleChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value;
        setContent(value);
    };
    return (
        <div>
            <input value={content} onChange={handleChange}/>
            <p>{content}</p>
        </div>
    )
};

export default InputTestComponent;