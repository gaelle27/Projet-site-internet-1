const firebaseConfig = {
    apiKey: "AIzaSyA01vUTYM3VPNqaxNY86m7DblSXeslRi60",
    authDomain: "formulaire-de-contact-si-2a8ca.firebaseapp.com",
    databaseURL: "https://formulaire-de-contact-si-2a8ca-default-rtdb.firebaseio.com",
    projectId: "formulaire-de-contact-si-2a8ca",
    storageBucket: "formulaire-de-contact-si-2a8ca.appspot.com",
    messagingSenderId: "452940392162",
    appId: "1:452940392162:web:7beeff1a60b0089df420bb"
  };

  firebase.initializeApp(firebaseConfig);

 var contactFormDb = firebase.database().ref("Formulaire de contact site");
 document.getElementById('contactForm').addEventListener('submit',submitForm);

 function submitForm(e){
    e.preventDefault();
    var name = getElementval("name");
    var emailId= getElementval("email");
    var message= getElementval("message");

    saveMessages(name, emailId, message);
    //actionner le message d'allerte
    document.querySelector(".alert").style.display="block";
    //remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display="none";
    }, 3000);
    // reset the form
    document.getElementById('contactForm').reset();

 }

const saveMessages = (name,emailId, message) =>{
 var contactFormDb = firebase.database().ref("Formulaire de contact site");
    var newContactForm = contactFormDb.push();
    newContactForm.set({
        name:name,
        emailId: emailId,
        message : message,
    });
};

 const getElementval = (id) => {
    return document.getElementById(id).value;
 };