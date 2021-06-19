import {_axios} from './api'


export const signupService=(user)=>{
    return _axios.post("/users/signup",user)
}