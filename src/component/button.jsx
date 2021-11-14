import styles from './list.module.css'
function Button({title,style})
{
    console.log()
    return (
        <button style={style}>{title}</button>
    )
}
export default Button