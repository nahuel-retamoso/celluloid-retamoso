import './Button.css'

function Button (props) {

    return (
        <button onClick={props.Click}>{props.children}</button>
    )
}

export default Button;