import classes from '../../styles/SelectionWindow.module.css'

function SelectionWindow({setType}){
    return (
        <>
        <p className={classes.title}>Convert to</p>
        <select className={classes.selection}
        onChange={(e) => {
            setType(e.target.value)
            console.log(e.target.value)
        }}> 
            <option value='Celsius' defaultValue >Celsius</option>
            <option value='Fahrenheit'>Fahrenheit</option>
        </select>
        </>
    )
}

export default SelectionWindow;