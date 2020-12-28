import axios from 'axios';
import history from '../helpers/history'
import jwt_decode from "jwt-decode";
const loginSuccess= (dispatch,response)=>{
    console.log(response);
    if(response.data.roles[0]=="Admin"){
        history.push('/Ingredient')
    }else if (response.data.roles[0]=="Member"){
        history.push('/')
    }
    
    else{
          history.push('/Login')
    }
    dispatch({
        type:'LOGİN_USER',
        payload:response.data
    });
}

export const loginUser = (UserName,Password) =>{
    return async (dispatch) =>{
        await axios.post('https://localhost:44357/api/Auth/SignIn',{UserName,Password}).then((response=>{
            
            localStorage.setItem("jwtToken",response.data.token);
            loginSuccess(dispatch,response);
           
        }))}
}

export const isLoggedIn =()=>{
    return async dispatch=>{
                let config = {
                    headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
                    }
                }
            await axios.get('https://localhost:44357/api/Auth/ActiveUser',config).then((response=>{
                loginSuccess(dispatch,response);
            }))
            .catch(error =>{
                history.push('/Login');
            }
            
            )};
        

}

export const logout =()=>{
    return async dispatch=>{
            localStorage.clear();
            dispatch({type:'LOGOUT' })
            };
        

}