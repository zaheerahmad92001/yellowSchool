import requests from '../Utils/requestRoutes.json';
import store from '../Redux/Store'
const BaseURL ='https://yellow-school.herokuapp.com/api';
//const BaseURL ='https://yellow-schoolapi.herokuapp.com/api';
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
         .then((response)=> response.json())
        .then((res)=>{
            //console.log('in promsis ',res)
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
                 'authorization':token
            },
        }
        route = requests[url].route + '?' + new URLSearchParams({...data}).toString()
    //     let [_url,id] = route.split('?')
    //     let [heading,_id] = id.split('=')
    //  route = _url + '/'+_id
      console.log('get request',route)
    }else if(requests[url].method === 'POST'){
        req={
            method:'POST',
            headers:{
                'Accept':'application/json,text/plain',
                // 'Content-Type': 'multipart/form-data,application/json'
               'Content-Type':'application/json',
                //  'authorization':token
            },
            body:JSON.stringify(data)
          // body:data
        }
        route = requests[url].route
        console.log('post request',route)
    }else if(requests[url].method==='PUT'){
        req={
            method:'PUT',
            headers:{
                'Accept':'application/json',
                 'Content-Type': 'application/json',
               // 'Content-Type': 'multipart/form-data',
                'authorization':token
            },
            body:JSON.stringify(data)
        }
        route = requests[url].route
        
    }else if(requests[url].method==='DELETE'){
        req={
            method:'DELETE',
            headers:{
                'Accept':'application/json,text/plain',
                'Content-Type':'application/json',
                'authorization':token
            },
            body:JSON.stringify(data)
        }
        route = requests[url].route
        console.log('DELETE request',route)

    }
   return  {route, req} 
}