// Slider
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

afterTime(4000);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      if (slideIndex <= 0) slideIndex = slides.length; 

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
  afterTime(4000);
}
function afterTime(delay) { 
      clearInterval(timer);
      timer = setInterval(() => {
          slideIndex++;
          showSlides();
      }, delay);
  }

  // Menu
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("mytabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("mytablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active3", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active3";
  }

   // Price Range Slider
   const sliders = document.querySelectorAll('input[type="range"]');
   var p;
   p = document.getElementById('price-slider-value');
   sliders[0].addEventListener('input', (e) => {
   if(+sliders[0].value > +sliders[1].value){
       sliders[1].value = +sliders[0].value;
     }
   });

   sliders[1].addEventListener('input', (e) => {
   if(+sliders[1].value < +sliders[0].value){
       sliders[0].value = +sliders[1].value;
     }
   });

   sliders.forEach((slider) => {
     slider.addEventListener('change', () => {
       // console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
       p.innerHTML = `От ${sliders[0].value} до ${sliders[1].value}`;
     })
   });


// Validation
function emailValidation()
  {
      var email = document.getElementById("email").value;
      var warning = document.getElementById("emailVal");
      var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

      if (email.match(pattern)) 
      {
        warning.style.display = "none";
         }
      else  
      {
        warning.style.display = "block";
      }
  }
   function passValidation()
   {
      var password = document.getElementById("password").value;
      var warning = document.getElementById("passVal");
      var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
      if (password.match(pattern)) 
      {
        warning.style.display = "none";
      }

      else 
      {
        warning.style.display = "block";
      } 
   }

//    Zoom
function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
  
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    img.parentElement.insertBefore(glass, img);
  
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
    }
    }

    magnify("myimage", 3);

    // Modal Window
    var modal = document.getElementById('modal');
	var btn = document.getElementById('openButton');
	var closebtn = document.getElementById('closeButton');

	btn.onclick = function	() {
		modal.style.display = "block";
	}
	closebtn.onclick = function	() {
		modal.style.display = "none";
	}

    // Accordion
    var title = document.getElementsByClassName('accordion-title');
    var cont = document.getElementsByClassName('accordion-cont');
	cont[0].style.maxHeight = cont[0].scrollHeight + "px";
	setTimeout(()=> {
        for (let i = 0; i < cont.length; i++) {
            cont[i].style.transition = 'all 1s';
        }
    }, 1000
)
	for (var i = 0; i < title.length; i++) {
		title[i].addEventListener('click', function() {
			if (!(this.classList.contains('active'))) {
				for(var i = 0; i < title.length; i++) {
					title[i].classList.remove('active');
				}
				this.classList.add('active');
			}
		})
	}