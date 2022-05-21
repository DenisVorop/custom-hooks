import React from "react";

export default function useInput(initialValue) {
    const [value, setValue] = React.useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
};
