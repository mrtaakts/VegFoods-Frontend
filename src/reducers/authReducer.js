
const INITIAL_STATE={
    username:'',
    isLoggedIn:false,
    isAdmin:false
}

export default (state=INITIAL_STATE,action)=>{
    if(action.type==='LOGİN_USER' || action.type==='LOGGED_IN'){
        return {
            username:action.payload.username,
            isLoggedIn:true,
            isAdmin:action.payload.roles[0]=="Admin"? true : false,
            user:action.payload.user
        };
    }else if (action.type==='LOGOUT'){
        return INITIAL_STATE;
    }
    return state;
}