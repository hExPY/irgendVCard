import {useApplicationStore} from "../../lib/store"
import { Input } from '@nextui-org/react';

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
            <Input value={content} onChange={handleChange}/>
        </div>
    )
};

export default InputTestComponent;