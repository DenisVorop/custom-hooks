import React from "react";

export default function useInput(initialValue) {
    const [value, setValue] = React.useState(initialValue);

    const onChange = e => setValue(e.target.value)

    const reset = () => setValue('')

    const bind = { value, onChange }

    return { value, reset, bind }
};
