// Event Listener für das Scrollen der Seite
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
     const navi = document.querySelector('nav');
     const naviHeight = document.querySelector('nav').offsetHeight;
  
    if (window.scrollY > header.offsetHeight -naviHeight) {
      if(this.matchMedia('(max-width: 576px)').matches){
        navi.style.position = 'absolute';
       
      } else{ navi.style = `position :fixed;
      max-width:1400px;
      top :0; z-index : 1000;`}
     
     } else {
       navi.style.position = 'static';
      navi.style.top = 'auto';
     }
   });
  
   // Auswahl des Burger-Menü-Icons und des mobilen Navigationsmenüs
   let bar = document.querySelector('#bar');
   let navMobile = document.querySelector('#navbarMobile');
   
  
  // Event Listener für das Burger-Menü-Icon 
   bar.addEventListener('click', () => {
     let navMobileHeight = navMobile.clientHeight;
     
     let gesamtHeight = slideshowImages[0].clientHeight;
   
     if (navMobileHeight === 0) {
      bar.innerHTML ="&#10005;";
       navMobile.style.zIndex ='1100';
       navMobile.style.height = `${gesamtHeight}px`;
       navMobile.style.display ="block";
     } else {
      bar.innerHTML ="&#9776;"; 
       navMobile.style.height = '0';
       navMobile.style.zIndex ='0';
       navMobile.style.display ="none";
     }
   });
  
  /*
  ** Slider Bereich
  */
  
  // Auswahl aller Slider-Bilder und des Container-Elements
  const slideshowImages = document.querySelectorAll(".slider a");
  let container = document.querySelector(".slider-container");
  
  // Verzögerung für das Anzeigen des nächsten Sliders
  const nextImageDelay = 5000;
  // Index des aktuellen Bildes im Slider
  let currentImageIndex = 0; 
  slideshowImages[currentImageIndex].style.opacity = 1;
  
  // Funktion, die der nächste Slider aufruft
  deletInterval = setInterval(nextImage, nextImageDelay);
  
  function nextImage() {
     // Aktueller Slider wird unsichtbar gemacht
    slideshowImages[currentImageIndex].style.opacity = 0;
    slideshowImages[currentImageIndex].style.zIndex ="0";
  
   // Aktualisierung der Index für den nächsten Slider
   currentImageIndex = (currentImageIndex+1) % slideshowImages.length;
  
     // Der nächste Slider wird sichtbar gemacht
    slideshowImages[currentImageIndex].style.opacity = 1;
    slideshowImages[currentImageIndex].style.zIndex ="100";
  }
  // Index des aktuellen Bildes im Slider
  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");
  
  
  
  // Event Listener für den nächsten Button
  next.addEventListener("click", function () {
    slideshowImages[currentImageIndex].style.opacity = 0;
    slideshowImages[currentImageIndex].style.zIndex ="0";
    currentImageIndex = (currentImageIndex+1) % slideshowImages.length;
    slideshowImages[currentImageIndex].style.opacity = 1;
    slideshowImages[currentImageIndex].style.zIndex ="100";
  });
  // Event Listener für den vorherigen Button
  prev.addEventListener("click", function () {
    slideshowImages[currentImageIndex].style.opacity = 0;
    slideshowImages[currentImageIndex].style.zIndex ="0";
    currentImageIndex = ((currentImageIndex-1) +slideshowImages.length) % slideshowImages.length;
    slideshowImages[currentImageIndex].style.opacity = 1;
    slideshowImages[currentImageIndex].style.zIndex ="100";
  });
  
  
  
  // Event Listener für jedes Bild im Slider
  slideshowImages.forEach( (image) =>{
    // wenn Maus über dem Slider ist,stoppt der Slider
  image.addEventListener("mouseover",() =>{
   
    clearInterval(deletInterval);
    
    });
    //wenn Maus den Slider verlässt, geht der Slider weiter, 
    
    image.addEventListener("mouseout",()=>{
      
      deletInterval = setInterval(nextImage, nextImageDelay);} );
   
  })
  
  // Event Listener für das Anpassen der Höhe des Sliders bei Änderungen 
  window.addEventListener('resize',adjustSliderHeight);
  window.addEventListener('load',adjustSliderHeight);
  
  // Funktion zum Anpassen der Slider-Höhe
  function adjustSliderHeight() {
   
  // Höhe des Bildes im Slider erhalten
  
   let imgHeight =document.querySelector('.slide img').clientHeight;
    
   // Setzen der Höhe des Slider-Containers auf die maximale Bildhöhe
   container.style.height = imgHeight + 'px';
  }
  
  // Event Listener für das Anpassen des oberen Seitenrandes bei Änderungen der Fenstergröße oder beim Laden der Seite
  window.addEventListener('resize',adjustmainMargin);
  window.addEventListener('load',adjustmainMargin);
  
  // Funktion zum Anpassen des oberen Seitenrandes
  function adjustmainMargin() {
   
   if(matchMedia('(max-width: 768px)').matches){
     let sliderTeaserTextHeight = document.querySelector('.teaser-text').clientHeight;
    let anleitung = document.querySelector('#anleitung');
    anleitung.style.marginTop = sliderTeaserTextHeight + 'px';
   }
   else{
     anleitung.style.marginTop = '0';
   }
  
  
  }
