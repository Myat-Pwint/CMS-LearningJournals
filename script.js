let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


function validateForm() { 
	var fName = document.forms["myForm"]["fName"].value; 
	var lName = document.forms["myForm"]["lName"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var questions = document.forms["myForm"]["questions"].value;
	if (fName == "") { 
		alert("Your first Name must be filled out"); 
		return false; 
	}
  if (lName == "") { 
		alert("Your last name must be filled out"); 
		return false; 
	}
	if (email == "") { 
		alert("Email must be filled out"); 
		return false; 
  }
  if (phone == "") { 
		alert("Phone number must be filled out"); 
		return false; 
  }
  if (questions == "") { 
		alert("Order details must be filled out"); 
		return false; 
  }

}
