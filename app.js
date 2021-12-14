const SYMBL_DATA_URL = "https://symbl-data-api.herokuapp.com/data"
import fetch from "node-fetch"

// requesting data
fetch(SYMBL_DATA_URL)
.then(res=>{
    if(res.ok){
        console.log("success");
    }
    else{
        console.log("failure");
    }
    return(res.json());
})
.then(data=>{
    // sorting the data
    data.sort((first,second)=>{
        return(first.id - second.id)
    })
    console.log(data);
})
.catch(err=>console.log(err))
