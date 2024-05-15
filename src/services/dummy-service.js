import { helper } from "./helper-service";

export const execute = () =>{
    const result = helper();
    if(result){
        return "Learning Js"
    }else{
        return "Learning Reactjs"
    }
}