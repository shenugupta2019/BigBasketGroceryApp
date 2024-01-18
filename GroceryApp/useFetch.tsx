import { useState,useEffect } from "react";

 const useFetch = (url: string) => {
    const [data,setData] = useState({});
    useEffect(()=>{
        fetchData(url);
    },[url]);

    const fetchData = async (url) => {
        const response = await fetch(url);
      //  const data = response.json();
        const jsonData = JSON.parse(JSON.stringify(response));
        setData(jsonData);
        console.log('shenu new data', jsonData);
    }
    return data;
};

export default useFetch;