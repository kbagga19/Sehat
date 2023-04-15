gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

ScrollTrigger.create({
  snap: 3/2, // snap whole page to the closest section!
});

// regis btn1 click red form1 (hide) red form 2(show)
$(document).ready(function() {
  $('.register-button1').click(function() {
    $('.red_form1').hide();
    $('.red_form2').show();
  });
});






//  let name = $('#name').val();
//  let receiverMail = $('#email').val();
//  let number = $('#number').val();


// Email.send({
//   Host: "smtp.elasticemail.com",
//   Username: "dmail3501@gmail.com",
//   Password: "C757C02657842876D556AA87235AE56BF181",
//   To: receiverMail,
//   From: "dmail3501@gmail.com",
//   Subject: "Sending Email using javascript",
//   Body: "Well that was easy!!"
// }).then(
//    message =>{
//      //console.log (message);
//      if(message=='OK'){
      
//      alert('Your mail has been sent. Thank you for connecting.');
      
//      const userName = document.getElementById("username").value;
//      const userEmail = document.getElementById("email").value;
   
//      localStorage.setItem("usname", JSON.stringify(userName));
//      localStorage.setItem("usemail", JSON.stringify(userEmail));
//      window.location.href = `http://localhost:5500/html/welcome.html`;


//      }
//      else{
//        console.error (message);
//        alert('There is error at sending message. ');
       
//      }

//    }
//  );
  
function sendmail(){

  console.log("hello");

  const naam = document.getElementById("username").value;
  const userEmail = document.getElementById("email").value;
  const subject = "Hi someone needs your help !";
  const message = naam+ " has registered to our website SEHAT and want your help to keep an eye on the daily track profile. ";

  fetch('http://127.0.0.1:3000/mail', {
    method: 'POST',
    body: JSON.stringify({
      to:userEmail,
      subject:subject,
      text: message,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
    .then(function(data) {
        console.log(data)
        alert('Your mail has been sent. Thank you for connecting.')
        window.location.href = `https://main--sehatsite.netlify.app/html/welcome.html`
      })
        
    .catch(error => console.error('Error:', error)); 

  }

  const remove = () => {
    const userName = document.getElementById("username").value;
    
     localStorage.setItem("usname", JSON.stringify(userName));
     window.location.href = `https://main--sehatsite.netlify.app/html/welcome.html`;
  
    }

  
  
  







