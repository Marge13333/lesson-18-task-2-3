function Slider() {
	const slides = document.querySelectorAll(".slide");
	const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button4 = document.getElementById('button4')
    const buttons = document.getElementById('buttons')
	let activeIndex = 0;
    

	function renderSlides() {
		slides.forEach((el, i) => {
			if (i === activeIndex) {
				el.classList.add("active");
			} else {
				el.classList.remove("active");
			}
		});
	}
    


    function button1fn(){
        activeIndex = 0;
        renderSlides();
       
    }
    function button2fn(){
        activeIndex = 1;
        renderSlides();
       
    }
    function button3fn(){
        activeIndex = 2;
        renderSlides();
        
    }
    function button4fn(){
        activeIndex = 3;
        renderSlides();
    }

    
////////time interval ver avamushave
     setInterval(() => {
        activeIndex ++
         if ( activeIndex > 3) {
            activeIndex =0
         }
         console.log("interval")
    }, 5000);

   ////////time interval ver avamushave


  
    renderSlides();
    button1.addEventListener("click", button1fn )
    button2.addEventListener("click", button2fn )
    button3.addEventListener("click", button3fn )
    button4.addEventListener("click", button4fn )




}
Slider();