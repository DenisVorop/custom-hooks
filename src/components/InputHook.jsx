import useInput from "../hooks/useInput"

const InputHook = () => {
    const username = useInput('')
    const password = useInput('')

    return (
        <div>
            <h2>Input custom hook</h2>
            <input type="text" placeholder="username" {...username} />
            <input type="text" placeholder="password" {...password} />
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </div>
    )
}

export default InputHook
