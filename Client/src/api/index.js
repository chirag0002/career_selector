import axios from "axios";

const url = "http://localhost:4000/";

export const fetchHomePage =() => axios.get(url);