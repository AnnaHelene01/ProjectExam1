// Kode til popup "ofte stilt spørsmål"
var popup = document.getElementsByClassName("question");
var i;

for (i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var oftenasked = this.nextElementSibling;
    if (oftenasked.style.display === "block") {
        oftenasked.style.display = "none";
    } else {
        oftenasked.style.display = "block";
    }
  });
}


//Hente ut html elementet og legge til addEventListener og en funksjon
const form = document.querySelector ("form#signup");
form.addEventListener("submit", validateForm);

//Hente ut inputs fra html!
const fullName = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const message = document.querySelector ("input#message");

//Hente ut alle span-ene fra html!
const nameMsg = document.querySelector ("span#nameMsg");
const subjectMsg = document.querySelector ("span#subjectMsg");
const emailMsg = document.querySelector ("span#emailMsg");
const messageMsg = document.querySelector ("span#messageMsg");


//Hvis alle felter er validert rett, kan formet bli submitted
const displayBanner = (message = "No message", className) => { //lager en funksjon med beskjed og klasse
    let bann = document.createElement("div"); //lager en ny div
    if (className) bann.classList.add(className);
    bann.innerHTML = message;
    let firstNode = document.body.childNodes[0];
    document.body.insertBefore(bann, firstNode); //plassere først over alt på siden
  }


function validateForm(e) {
  // Forhindre at skjema submitter før det er ferdig
  e.preventDefault();

  // Validate Name,no digits and at least 5 charachters
  let submittedName = fullName.value.trim(); 
  console.log("Name: " + submittedName); 
  nameMsg.innerHTML = ""; // Clear earlier messages
  if (submittedName.length < 5) { // Check if name is long enough
    nameMsg.innerHTML += "The name must be at least 5 characters long! "; 
  }  
  if (/\d/.test(submittedName)) { // And make sure it don't contain any digits
    nameMsg.innerHTML += "The name cannot contain any digits! ";
  }

  //Validate subject (minimum lengde på 15)
  let submittedSubject = subject.value.trim();
  console.log("Subject: " + submittedSubject);
  subjectMsg.innerHTML = ""; //Clear earlier messages
  if (submittedSubject.length < 15) {
      subjectMsg.innerHTML += "The subject must be at least 15 charachters long!";
  }
  if (/\d/.test(submittedSubject)) { //Make sure it dont contain any digits 
    subjectMsg.innerHTML += "The subject cannot contain any digits!";
  }

  // Validate e-mail
  let submittedEmail = email.value.trim();
  console.log("Email: " + submittedEmail); 
  emailMsg.innerHTML = ""; // Clear earlier messages    
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(submittedEmail)) {
    emailMsg.innerHTML += "Please enter a valid email";
  }

  //Validate Message
  let submittedMessage = message.value.trim();
  console.log("Message: " + submittedMessage);
  messageMsg.innerHTML = ""; // Clear earlier messages
  if (submittedMessage.length < 25) {
    messageMsg.innerHTML += "The address must be at least 25 characters!";
  } 

if (nameMsg.innerHTML === "" && subjectMsg.innerHTML === "" && emailMsg.innerHTML === "" && messageMsg.innerHTML === "") {
    console.log("Form is submitted!");
    displayBanner("Form is submitted!", "ok")
    //form.submit(); ///for å submitte skjema 
}
 else {
    console.log("You still have validation errors");
    displayBanner("You still have validation errors", "error");
}
}//Bannerne fjernes med en gang du refresher siden.


