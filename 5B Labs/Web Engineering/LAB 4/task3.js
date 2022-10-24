
var alaram = prompt(" “Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss"); 
if(alaram==='S' || alaram==='s')
{
   while(alaram==='S' || alaram==='s')
   {
    alaram = prompt(" “Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss");
   }  
}
else if(alaram==='D' || alaram==='d')
{
    alert("Good Morning ")    
}
else
{
    alert("Wrong Input Provided");
}


