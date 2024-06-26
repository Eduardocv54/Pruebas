import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario');
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);


