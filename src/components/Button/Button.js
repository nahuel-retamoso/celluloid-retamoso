import './Button.css'

function Button (props) {

    return (
        <button onClick={props.onAdd}>{props.children}</button>
    )
}

export default Button;