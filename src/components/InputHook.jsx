import useInput from "../hooks/useInput"

const InputHook = () => {
    const {value, reset, bind} = useInput('')

    return (
        <div>
            <h2>Input custom hook</h2>
            <input type="text" placeholder="username" {...bind} />
            <button onClick={() => (reset(), console.log(value))}>Click</button>
        </div>
    )
}

export default InputHook
