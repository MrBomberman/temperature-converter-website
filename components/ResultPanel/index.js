import classes from '../../styles/ResultPanel.module.css'

function ResultPanel({result, degrees}){
    const sum = degrees === ''  ? 'Convert something' : result
    return (
        <>
        <p className={classes.title}>Result</p>
        <div className={classes.result}>{sum}</div>
        </>
    )
}

export default ResultPanel;