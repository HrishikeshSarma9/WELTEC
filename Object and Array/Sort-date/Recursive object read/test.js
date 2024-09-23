let a = []
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(v=>{
    loopIn(v)
    
})

const loopIn = (v) =>{
    let html = "<tr>"
    
    // console.log(v);
    
    v.map((obj)=>{
        
        // console.log("obj============================= :",obj);
        for(key in obj){
            if( typeof obj[key] === "object" ){
                // console.log(typeof obj[key]);
                let arr = []
                arr.push(obj[key])
                loopIn(arr)
            }
            else{
               console.log(key+" :: "+obj[key]);
              
            }
            // console.log(obj[key]);
            
        }
        console.log("-----------------------------------");
        
        
    })
}