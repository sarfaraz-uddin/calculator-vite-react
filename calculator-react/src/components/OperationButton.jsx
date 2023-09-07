import {ACTIONS} from '../App.jsx';

export default function OperationButton({dispatch,operation}){
    return(
        <button onClick={()=>dispatch({type:ACTIONS.CHOOSE_operation,payload:
            {operation}})}>
            {operation}
        </button>
    )
}