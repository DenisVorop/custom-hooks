import React from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceHook() {
    const [value, setValue] = React.useState('')
    const debouncedSearch = useDebounce(search, 500)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <h2>Debounce custom hook</h2>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
}

export default DebounceHook;
