import {ACTIONS} from '../App.jsx';
import reducer from '../reducer/reducer.jsx';

//digit buttons are the digits 
export default function DigitButton({dispatch,digit}){
    return(
        <button onClick={ () => dispatch({type:ACTIONS.ADD_DIGIT,payload:
            {digit}})}>
            {digit}
        </button>
    )
}
 