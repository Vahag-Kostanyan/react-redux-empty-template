import * as api  from "../api/exampleApi";

export const getData = () => async (dispatch) => {
    const res  = await api.getData();
    const data = res.date;
    if(data.status == "error"){
        return data.data;
    }

    dispatch({type: "GET_DATA", payload: data.data})
}