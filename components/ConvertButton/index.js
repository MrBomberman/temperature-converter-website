import classes from '../../styles/ConvertButton.module.css'

function ConvertButton({convertDegrees ,type}){
    // const currentType = type === 'Celsius' ? ' °C' : ' °F'
    return (
        <>
        <button className={classes.styleBtn} onClick={() => 
            convertDegrees()
            
            }>Convert</button>
        </>
    )
}

export default ConvertButton;