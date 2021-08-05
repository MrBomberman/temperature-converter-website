import classes from '../../styles/ConvertButton.module.css'

function ConvertButton({convertDegrees ,degrees}){
    // const currentType = type === 'Celsius' ? ' °C' : ' °F'
    if(degrees === '') {
        return (
            <>
            <button className={classes.styleBtn} disabled>Convert</button>
            </>
        )
    } else {
        return (
            <>
            <button className={classes.styleBtn} onClick={() => 
                convertDegrees()}>Convert</button>
            </>
        )
    }

}

export default ConvertButton;