import * as api from "../api"

export const getHomePage=() => async(dispatch)=> {
    const action ={ type: 'FETCH_ALL',payload:[]}

    try{
        const {data} = await api.fetchHomePage();
        dispatch({type: 'FETCH_ALL',payload:data});
    }catch(error){
            console.log(error.message)
    }

    
}