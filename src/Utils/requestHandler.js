import requests from '../Utils/requestRoutes.json';
import store from '../Redux/Store'
const BaseURL ='https://yellow-school.herokuapp.com/api';
let token='';
//let authToken = '';

export function requestHandler(url,data){
     try{
        token = store.getState().user.UserInfo.token;
        console.log('auth token',token)
 }catch(error){
      console.log('error while accessing user',user)
     }

    let {route ,req} = setUpRequest(url,data,token);
    return new Promise((resolve,reject)=>{
        fetch(BaseURL+route,req)
        .then(response => response.json())
        .then((res)=>{
            resolve(res)
        })
        .catch((error)=>{
            console.log('error while submitting request',error)
            reject(error)
        });
    });
}
function setUpRequest(url,data,token){
    let route = null;
    let req = null;
    if(requests[url].method==='GET'){
        req={
            method:'GET',
            headers:{
                'Accept':'application/json,text/plain',
                'Content-Type':'application/json',
                // 'authorization':token
            },
        }
        route = requests[url].route + '?' + new URLSearchParams({...data}).toString()
        console.log('get request',route)
    }else if(requests[url].method === 'POST'){
        req={
            method:'POST',
            headers:{
                'Accept':'application/json,text/plain',
                'Content-Type':'application/json',
                // 'authorization':token
            },
            body:JSON.stringify(data)
        }
        route = requests[url].route
        console.log('post request',route)
    }else if(requests[url].method==='PUT'){
        req={
            method:'PUT',
            headers:{
                'Accept':'application/json,text/plain',
                'Content-Type':'application/json',
                'authorization':token
            },
            body:JSON.stringify(data)
        }
        route = requests[url].route
        console.log('PUT request',route)
    }
   return  {route, req} 
}