(function(){

    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message){
        let container = input.parentElement;
        let error = container.querySelector('.error-message'); 
        if (error){
            container.removeChild(error);
        }
        if(message){
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
      
    function validateEmail() {
        let value = emailInput.value;
        if(!value){
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }
        
        if(value.indexOf('@') === -1){
            showErrorMessage(emailInput,'You must enter a valid Email address.');
            return false;
        }
        
        if(value.indexOf('.') === -1){
            showErrorMessage(emailInput,'You must enter a valid Email address.');
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
       
    }

    function validateMessage() {
        let value = messageInput.value.length;
        console.log(value);
        if(value >= 10){
            return true;
        }else if(!value){
            showErrorMessage(messageInput,'Message is a required field');
            return false;
        }else{
            showErrorMessage(messageInput,'Message should include at least 10 characteres');
            return false;
        }
    }

    function formValidation(){
        let isValidEmail = validateEmail();
        console.log(isValidEmail);
        let isValidMessage = validateMessage();
        console.log(isValidMessage);
        return isValidEmail && isValidMessage;
    }

    form.addEventListener('submit', (e) =>{
        e.preventDefault(); // Do not submit to the server
        if(formValidation()){
            alert('Your message has been submited!');
        }
    });

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

})();