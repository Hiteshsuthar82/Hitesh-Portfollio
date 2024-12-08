var typed = new Typed(".text", {
  strings: ["Javascript Developer", "Mern Developer", "Web Developer", "App Developer", "Full Stack Developer"],
  typeSpeed: 50,
  backSpeed: 70,
  backDelay: 1500,
  loop: true
});

function clearErrors(){
  err = document.getElementsByClassName('err-message')
  for(iteam of err){
    iteam.innerHTML='';
  }
}

function setError(id, error){
  document.getElementById(id).innerHTML=error;
}

function validation(){

  clearErrors();

  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var mob = document.myform.cno.value;
  var mail = document.myform.email.value;
  var add = document.myform.add.value;
  var date = document.myform.date.value;
  // var check = document.myform.check.value;
  
  
  var returnvalue = true;

  if(fname == ""){
    setError("fname-message","** please fill fname **");
    returnvalue = false;
  }
  

  if(lname == ""){
      setError("lname-message","** please fill lname **");
      returnvalue = false;
    }
    

    if((mob.charAt(0)!=9) && (mob.charAt(0)!=8) && (mob.charAt(0)!=7) && (mob.charAt(0)!=6)){
      setError("cno-message","** mobile numbers must be starts with 9, 8, 7 and 6. **");
      returnvalue = false;
    }
    if(mob.length<10){
      setError("cno-message","** mobile numbers must be 10 digit **");
      returnvalue = false;
    }
    if(mob.length>10){
      setError("cno-message","** mobile numbers must be 10 digit **");
      returnvalue = false;
    }
    if(isNaN(mob)){
      setError("cno-message","** Only numbers are allowed **");
      returnvalue = false;
    }
    if(mob == ""){
      setError("cno-message","** please fill mobile number **");
      returnvalue = false;
    }


    if(add == ""){
      setError("add-message","** please fill address **");
      returnvalue = false;
    }


    if((mail.charAt(mail.length-4)!='.') && (mail.charAt(mail.length-3)!='.')){
      setError("email-message","** Invalid position of . **");
      returnvalue = false;
    }
    if(mail.indexOf('@')<=0){
      setError("email-message","** Invalid position of @ **");
      returnvalue = false;
    }
    if(mail == ""){
      setError("email-message","** please fill Email Address **");
      returnvalue = false;
    }


    if(date == ""){
      setError("date-message","** please fill date **");
      returnvalue = false;
    }


    // if(check == 'on'){
    //   document.getElementById("check-message").innerHTML="** please confirm the details **";
    //   return false;
    // }

    return returnvalue;
}

function openmenu(){
  var menu = document.getElementById("menu").style.height;
  console.log(menu)
  if(menu == ''){
    document.getElementById("menu").style.height=(parseInt(170))+"px";
  }
  else if(menu == (parseInt(0))+"px"){
    document.getElementById("menu").style.height=(parseInt(170))+"px";
  }
  else{
    document.getElementById("menu").style.height=(parseInt(0))+"px";
  }
}