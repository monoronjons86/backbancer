//step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step:2 get the email address beside the input failed
    //always remember to use .value to get text from  an input filed
    const emailFiled=document.getElementById('user-email');
    const email=emailFiled.value ;
    //step-3:get password
    //step-3.a:set id on the html element
    //3.b:get the element
    //3.c:get the value from the element
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // console.log(email,password);

    //Danger: DO NOT verify email password on the client side
    // step-4: verify email or password and check whether valid user or not
    if(email==='sontan@baap.com' && password==='secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
    



    
});