import classes from '../../styles/InputBar.module.css';

function InputBar({setDegrees, setResult, type}){
    const currentType = type === 'Celsius' ? 'Fahrenheit' : 'Celsius' 

    return (
        <>
        <p className={classes.title}>Degrees({currentType})</p>
        <input 
        type='number'
        onChange={(e) => {
            const { value } = e.target;
            // console.log(e.target.value) // получаем то, что вводим
            setDegrees(value);
            if(value === ''){
                setDegrees(value)
                setResult('Convert something')
            }
          }}
        placeholder='Write degrees to convert' 
        className={classes.input} 
        ></input>
        </>
    )
}

export default InputBar;