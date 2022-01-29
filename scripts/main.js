let myimg=document.querySelector('img');
let mybutton=document.querySelector('button');
let myhead=document.querySelector('h1')

myimg.onclick=function(){
    let mysrc=myimg.getAttribute('src')
    if(mysrc==="images/1.jpg"){
        myimg.setAttribute('src','images/2.png')
    }else{
        myimg.setAttribute('src',"images/1.jpg")
    }
}

function setuser(){
    let myuser=prompt('show me your name','alkaid');
    localStorage.setItem('name',myuser);
    myhead.textContent='welcame to here, '+ myuser;
}

if(!localStorage.getItem('name')){
    setuser()
}else{
    let storeduser=localStorage.getItem('name')
    myhead.textContent='welcame to here, '+storeduser
}

mybutton.onclick=function(){
    setuser();
}
