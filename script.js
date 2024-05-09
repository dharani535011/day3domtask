let res=document.getElementById("result")
function display(num){
    res.value += num
}
function calculate(){
    try{
        res.value= eval(res.value)
    }
    catch(err){
alert("invalid")
    }
}
function del(){
    res.value = res.value.slice(0,-1)
}
function dell(){
    res.value = ""
}