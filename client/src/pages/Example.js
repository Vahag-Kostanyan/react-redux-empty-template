import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/exampleAction";


const Example = () => {


    const dispatch = useDispatch();

    const backQuery = () => {
        dispatch(getData());
    }

    const datas = useSelector(state => state.example); // get datas


    return (
        <div>
            <button onClick={backQuery}>click me</button>
        </div>
    )
}

export default Example