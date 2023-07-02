import React from "react";
import {useApplicationStore} from "../../lib/store";

const ViewComponent = () => {
    const content = useApplicationStore(state => state.content)
    return (
        <div style={{
            background: content
        }}>
            i am view
        </div>
    )
}

export default ViewComponent;