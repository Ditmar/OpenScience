import {useState} from 'react'
const Button = () => {
    const [count, setCount] = useState(1);
    const handlerPlusCount = () => {
        console.log('----test')
        setCount(count + 1);
    }
    return <div >
            <button onClick={handlerPlusCount}>Button {count}</button>
        </div>
}
export default Button;