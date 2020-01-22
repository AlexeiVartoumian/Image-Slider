# Image-Slider
Updated Image slider
This Image-slider contains :
play/pause functionality
arrow-keys navigation
dot-navigation


written in vanilla Javascript html and Css.





----BUGS FIXED---

Initial bug- when pause button was pressed and you consequently clicked on the dot navigation- the 
slide Index would stop working- 

1. This was due to the  show slide function containing
the play/pause functions inside of them-
the dot navigation function could not access the play/pause functions which was why it froze.
2. solution was to put the play/pause functions into the global scope.
