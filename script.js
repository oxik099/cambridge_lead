
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


  AOS.init({
    duration: 1200, // You can also add other options here
  });

  function showMoreContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  

//testimonials statistics







var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


function toggleMenu() {
  var menuLinks = document.querySelector('.mainNav__links');
  menuLinks.classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function() {
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
      triggerElement: ".mainHeading", // trigger animation when this element is in view
      reverse: false // only play animation once
  })
  .setClassToggle(".mainHeading__text", "animated") // toggle class on scroll
  .addTo(controller);
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', event => {
      // Your code to toggle the display of the sub-menu
  })
})






var win = $(window);

var allMods = $("block-reveal");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("block-reveal-inner");
    }
  });
});




// function validateForm() {
//   // Reset error messages
//   document.getElementById("nameError").innerHTML = '';
//   document.getElementById("emailError").innerHTML = '';
//   document.getElementById("phoneError").innerHTML = '';
  

//   // Get form inputs
//   var name = document.getElementById("name").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var phone = document.getElementById("phone").value.trim();

//     // Array to store error messages
//     var errors = [];

//   // Validate name
//   if (name === "") {
//       errors.push("Please enter your name");
      
//   } 

//   // Validate email
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//       errors.push("Please enter a valid email address");
      
//   }

//   // Validate phone
//   var phoneRegex = /^\d{10}$/; // Assuming 10 digits for a phone number
//   if (!phoneRegex.test(phone)) {
//       errors.push("Please enter a valid phone number");
      
//   }

//    // Display all errors
//    if (errors.length > 0) {
//     errors.forEach(function (error, index) {
//         var errorElementId = index === 0 ? "nameError" : index === 1 ? "emailError" : "phoneError";
//         document.getElementById(errorElementId).innerHTML = error;
//     });
//     return false;
// }

//   // If all validations pass, allow form submission
  
//   alert("Form submitted successfully!");
//   return true;
// }


function validateForm() {
  // Reset error messages
  document.getElementById("nameError").innerHTML = '';
  document.getElementById("emailError").innerHTML = '';
  document.getElementById("phoneError").innerHTML = '';
  document.getElementById("messageError").innerHTML = '';
  document.getElementById("contactMethodError").innerHTML = '';
  document.getElementById("servicesError").innerHTML = '';


  // Get form inputs
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();
  var contactMethod = document.querySelector('input[name="contactMethod"]:checked');
  var servicesChecked = document.querySelectorAll('input[name="service"]:checked');

  // Flag to check if there are any errors
  var hasErrors = false;

  // Validate name
  if (name === "") {
      document.getElementById("nameError").innerHTML = "Please enter your name";
      hasErrors = true;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email address";
      hasErrors = true;
  }

  // Validate phone
  var phoneRegex = /^\d{11}$/; // Assuming 10 digits for a phone number
  if (!phoneRegex.test(phone)) {  // 'test' is a built-in method of regex that checks if the string 'phone' matches the regex
      document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
      hasErrors = true;
  }

  if (!contactMethod) {
    document.getElementById("contactMethodError").innerHTML = "Please select a contact method";
    hasErrors = true;
}
if (servicesChecked.length === 0) {
  document.getElementById("servicesError").innerHTML = "Please select at least one service";
  hasErrors = true;
}

  if (message === "") {
    document.getElementById("messageError").innerHTML = "Please enter your message";
    hasErrors = true;
}

  // If there are errors, prevent form submission
  if (hasErrors) {
      return false;
  }

  // If all validations pass, allow form submission
  alert("Form submitted successfully!");
  return true;
}
