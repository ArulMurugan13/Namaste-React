import { useEffect, useState } from "react";
import { BANGALORE } from "./constants";

//custom hook
const useApiData =()=>{
    
    const [resData , setResData] = useState([]);

     useEffect(() => {
       fetchData();
     }, []);

     const fetchData = async () => {
       const data = await fetch(BANGALORE);
       const json = await data.json();

        setResData(json);
     };


    return resData;
}

export default useApiData;