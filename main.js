// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcubqOEmM0_zv88rn4RJfIi8R_fIzLFxE",
    authDomain: "contactform-c7550.firebaseapp.com",
    databaseURL: "https://contactform-c7550.firebaseio.com",
    projectId: "contactform-c7550",
    storageBucket: "contactform-c7550.appspot.com",
    messagingSenderId: "177344929776"
  };
  firebase.initializeApp(config);

  // Reference Messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
// Submit Form
function submitForm(e){
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

   //Save Message
    saveMessage(name, company, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display='block';

    //Hide alet after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear Form
    document.getElementById('contactForm').reset();
}

// Fuction To get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save The Message to The firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        messsage:message
    });
}
