import axios from "axios"

export const getUsers = () => {
    try{
        const resp = axios.get('')
        return resp.data;
    }
    catch (error)
    {
        return (`Error: ${error.message}`)
    }
}

