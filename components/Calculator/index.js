import classes from '../../styles/Calculator.module.css'
import ConvertButton from '../ConvertButton';
import InputBar from '../InputBar';
import ResultPanel from '../ResultPanel';
import SelectionWindow from '../SelectionWindow';
import { useEffect, useState } from 'react';

function Calculator(){
    const [degrees, setDegrees] = useState('');
    const [type, setType] = useState('Celsius');
    const [result, setResult] = useState('Convert something');



    function convertDegrees() {
            if(type === 'Fahrenheit'){
                return setResult((degrees - 32) / 1.8)    
            }
            if (type === 'Celsius'){
                return setResult((degrees * 1.8) + 32)
            }
        }
        

    return (
        <>
        <div className={classes.container}>
        <p className={classes.title}>Converter</p>
            <div>
            <div className={classes.tempBox}>
                <div className={classes.inputBar}>
                <InputBar setDegrees={(value) => setDegrees(value)} setResult={(value) => setResult(value)} type={type}/>
                </div>
                <div className={classes.inputBar}>
                <SelectionWindow setType={(value) => setType(value)}/>
                </div>
                <div className={classes.inputBar}>
                <ConvertButton convertDegrees={convertDegrees} type={type}/>
                </div>
             </div>
            <div className={classes.result}>
                <ResultPanel degrees={degrees} result={result}/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Calculator;