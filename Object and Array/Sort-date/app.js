let arr = []
for (let i = 0; i < 20; i++) {
    let a ={}
    let date = new Date(2024,Math.round(Math.random()*11),Math.round(Math.random()*10))
    a.date= date.toDateString()
    
    a.status = Math.random()>0.5? true: false

    arr.push(a)
}
//  let  a={"date": "Wed Jan 17 2024", "status":true}
//  a.date = "Wed Jan 17 2024"
// a.status = true
// console.log("a", a);

arr.push({"date": "Wed Jan 17 2024", "status":true}, {"date": "Wed Jan 17 2024", "status":false})


// a.status = false
// console.log("a", a);

// arr.push(a)



