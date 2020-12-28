import axios from 'axios';
export const fetchCvList=()=>{
    return async(dispatch)=>{
      const response =
          await axios.get('https://jsonplaceholder.typicode.com/posts');
    
      dispatch({
          type:'FETCH_CV_LIST',
          payload:response.data
      });
    }
}