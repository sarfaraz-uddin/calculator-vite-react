import {ACTIONS} from '../App.jsx';

//operation button is for performing operations
export default function OperationButton({dispatch,operation}){
    return(
        <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:
            {operation}})}>
            {operation}
        </button>
    )
}