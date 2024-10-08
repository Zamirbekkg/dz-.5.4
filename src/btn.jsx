import { useDispatch } from "react-redux";
import { leasenum, leasonnum, oneminusnum, oneplusnum, resetnum } from "./redux/redux";


const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(oneplusnum())
            }}>+1</button>

            <button onClick={() => {
                dispatch(oneminusnum())
            }}>-1</button>

            <button onClick={() =>{
                dispatch(resetnum(''))
            }}>reset</button>

            <button onClick={() =>{
                dispatch(leasenum())
            }}>+5</button>

            <button onClick={() =>{
                dispatch(leasonnum())
            }}>-5</button>
        </div>
    );
}

export default Btn;
