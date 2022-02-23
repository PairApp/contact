// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBEe7l0rIsM5wsnXxdifZF-dT1DOGPaFY8",
       authDomain: "pairness-80dfd.firebaseapp.com",
       databaseURL: "https://pairness-80dfd-default-rtdb.firebaseio.com",
       projectId: "pairness-80dfd",
       storageBucket: "pairness-80dfd.appspot.com",
       messagingSenderId: "505202668280",
       appId: "1:505202668280:web:87df8f9800a099cbc0c10d"
   };
   firebase.initializeApp(config);
   
   // Reference messages collection
   var messagesRef = firebase.database().ref('messages');
   
   // Listen for form submit
   document.getElementById('contactForm').addEventListener('submit', submitForm);
   
   // Submit form
   function submitForm(e){
     e.preventDefault();
   
     // Get values
     var name = getInputVal('name');
     var company = getInputVal('company');
     var email = getInputVal('email');
     var phone = getInputVal('phone');
     var message = getInputVal('message');
   
     // Save message
     saveMessage(name, company, email, phone, message);
   
     // Show alert
     document.querySelector('.alert').style.display = 'block';
   
     // Hide alert after 3 seconds
     setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
     },3000);
   
     // Clear form
     document.getElementById('contactForm').reset();
   }
   
   // Function to get get form values
   function getInputVal(id){
     return document.getElementById(id).value;
   }
   
   // Save message to firebase
   function saveMessage(name, company, email, phone, message){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
       name: name,
       company:company,
       email:email,
       phone:phone,
       message:message
     });
   }