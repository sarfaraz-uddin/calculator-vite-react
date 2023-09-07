import {ACTIONS} from '../App.jsx';

export default function DigitButton({dispatch,digit}){
    return(
        <button onClick={ () => dispatch({type:ADD_DIGIT,payload:
            {digit}})}>
            {digit}
        </button>
    )
}