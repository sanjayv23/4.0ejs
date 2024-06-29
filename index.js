import express from "express"
const port=3000
const app=express()
const d = new Date("June 29, 2024 11:13:52")
let day = d.getDay()
app.listen(port,()=>{
    console.log(`listening to port ${port}.` )
})
let daytype=" a WeekDay"
let advice=" It's time to Work Hard  "
if(day==0 || day==6){
    daytype=" a WeekEnd"
    advice=" It's time to Enjoy your WeekEnd"
}
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        dayt:daytype, 
        adv: advice})
})