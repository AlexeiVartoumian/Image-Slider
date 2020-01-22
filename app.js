/*-----------------
  GLOBAL VARIABLES 
  -----------------*/
/**the variable below is the counter that is used to iterate through images */
var slideIndex = 0;

var playBtn = document.querySelector(".play-pause-btn");
var pauseBtn = document.querySelector(".play-pause-btn.pause");

/*setting the movement of slides into a global variable so play and pause functionality can be included - see line  63* */
var timer = setInterval(function(){
    showSlides(++slideIndex)
}, 3000)

/*-----------------------
 * The Function that links which active dots and images are shown
 *------------------------------*/


showSlides(slideIndex)

/*function takes parameter index- which will be the index of the slide shown* */
function showSlides(index){
    /** step1 : declare variables for slides and dots  */
    var slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll('.dot-navigation');

    /** step2: if index is greater than number of slides - slideIndex reverts to start */
    if( index >= slides.length) slideIndex = 0;

    /** step 3: logic for user being at the start of slides */
    if(index < 0) slideIndex = slides.length -1;

    /** step 4: hide non-active photos ad dots that are nor current index by iterating with for loop */
    for(var i = 0; i < slides.length; i++){
        /**change style of non active photo */
        slides[i].style.display = "none";
        /**remove class of none active dot */
        dots[i].classList.remove("active-dot");
    }

    /**step 5: show active dot and photo- reverse of step 4 */
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active-dot");

    
}

/**-----------------------
 * Play pause functionality 
 * -----------------------*/

/**step 1= set initial display of pause to showing
 * and playing to hide
 */
pauseBtn.style.display ="block";
playBtn.style.display = "none";

/**step 2: logic to stop slideshow-psudeo-code
 * if timer is true-( the slide show is playing) , then----
 * use method Clear Interval and Boolean null to stop timer variable
 */
    pauseBtn.addEventListener("click", function(){
        if(timer){
            clearInterval(timer)
            timer = null;
            playBtn.style.display = "block"
            pauseBtn.style.display="none"
        } 
    })
    /**reverse of pause functionality - restart the global timer variable */
     playBtn.addEventListener("click", function(){
        if(timer === null){
            timer = setInterval(function(){
                showSlides(++slideIndex)
            }, 3000)
            playBtn.style.display="none"
            pauseBtn.style.display="block"
        }
    })

    /*-----------------------------
    *Dot-Navigation functionality
    ------------------------------- */
    /** using forEach that takes another function "element" which represents each dot */
document.querySelectorAll(".dot-navigation").forEach(function(element){
    element.addEventListener("click", function(){
        /** because the number of dots and slide-images are the same
         * by linking the dot-index to the slide-index the image is selected on click
         */
        /**step 1- make a real array of all dots  by--- */
       var dots =  Array.prototype.slice.call
       /**step 2 = because ".dot-navigation" html(line 45-49) was selected and we want all the dots not just the singular- 
        * go up the DOM tree  to parent element of all the siblings ".dot-wrapper" html line 45
        */
        (this.parentElement.children),
        /** because there is a real array the indexOf method can be used
         * which will point to the index of the dot clicked
         */
        dotIndex = dots.indexOf(element);

        /**final step: link the dotIndex variable to the global Slideindex variable  */
        showSlides(slideIndex = dotIndex);
        
    })
})


/*--------------------------------
ARROW KEYS - using query selectors for the arrow keys
 key codes used for left and right arrow keys pressed
 ----------------------------*/
document.querySelector("#arrow-prev").addEventListener("click", function(){
showSlides(--slideIndex);
})


document.querySelector("#arrow-next").addEventListener("click", function(){
showSlides(++slideIndex);
})

document.addEventListener("keyup", function(key){
    switch (key.keyCode){
        case 37:
            showSlides(--slideIndex);
            break;
        case 39:
            showSlides(++slideIndex);
            break
    }
})

