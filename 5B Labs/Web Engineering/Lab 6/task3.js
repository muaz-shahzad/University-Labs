var age=document.getElementById('input');
function checkage()
{
    if(age.value.length>0)
    {
        message = age.value >= 18 ? 'You are ' + age.value + '+ \nYou can drive.' : 'You are under Age \nYou cannot drive.';
        alert(message);
        age.value="";
    }   
}