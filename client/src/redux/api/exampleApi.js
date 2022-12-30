import axios from "axios";

const backURL = process.env.REACT_APP_API_URL;


export const getData = () => axios.get(backURL + "/api/users");