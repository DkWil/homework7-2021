document.querySelector("#contact_info").addEventListener("submit",function(){
    let=document.querySelector("#email1")
    let=document.querySelector("#email2")
    
    console.log(em1.value)
    console.log(em2.value)



    if(em1.value != em2.value){
        alert("Emails must match")
        em2.focus()
        return false;
    }




})

document.querySelector("#useSame").addEventListener("change",function(){
    // console.log(this)
    // console.log(this.checked)
    if(this.checked==true){

        document.querySelector("#b-street").value= document.querySelector("#d-street").value}
    else{
        return false;}



    






})