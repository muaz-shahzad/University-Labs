const http=require("http");
const detail={
    name:"M Muaz Shahzad",
    semester:5,
    program:"BSE"}
const server =http.createServer((req,res)=>{
    res.write(JSON.stringify(detail).toString());
    res.end();});
server.listen(4000,"127.0.0.1",()=>{
    console.log("listening to the port no 4000");
});
