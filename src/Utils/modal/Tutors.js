import React,{Component}from 'react';
import { requestHandler } from '../requestHandler';
export default class Tutors extends Component{

    static SubjectList(email,password,name){
        return requestHandler('subjectsList')
    };
    
    static TutorsList(){
return requestHandler('tutorList')
    };
    static Tutordetail(id){
        return requestHandler('tutorDetail',{
            tutorId:id
        })
    };
    
}