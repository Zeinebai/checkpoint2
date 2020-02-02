var firebaseConfig = {
    apiKey: "AIzaSyCdIj7YUQCKtIslJC-N8_Tycq0rQgLiWa4",
    authDomain: "gomycode-99059.firebaseapp.com",
    databaseURL: "https://gomycode-99059.firebaseio.com",
    projectId: "gomycode-99059",
    storageBucket: "gomycode-99059.appspot.com",
    messagingSenderId: "574350542554",
    appId: "1:574350542554:web:6165ee4cd4611cf51f87e3",
    measurementId: "G-4587YQSNRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var EmailAdress = document.getElementById('EmailAdress').value;
    var PhoneNumber = document.getElementById('PhoneNumber').value;
    saveMessage(name, EmailAdress, PhoneNumber);


}

var messageRef = firebase.database().ref('contactForm');

function saveMessage(name, EmailAdress, PhoneNumber) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        EmailAdress: EmailAdress,
        PhoneNumber: PhoneNumber
    });
}