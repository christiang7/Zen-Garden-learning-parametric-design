# Zen Garden

## concept
The idea for the semester project is to code a digital zen garden. 
Here is my pseudo algorithm for how I think the code should/could work:

    create canvas - (full width)

    create border
    create horizontal background sand (for loop)
    create vertical background sand left and right (for loop)

    create stones
    click on a button and create three random sized stones 
    click with the mouse on the canvas and create a random sized stone in this area (is there a max. number / can you undo the stones?)

    create sandlines
    click on one stone and generate one sandline around that stone with the same shape as the stone
    with each click on a stone an additional line is created around that stone with the same contour/shape
    the sandline of the last clicked stone covers the sandlines of the previously created sandlines of other stones
    the background lines are covered also

    *** add controls for varying the color, the distnace between the lines and the stroke style

    export svg file for lasercutter by clicking on a button

## idea sketches
<img width="100%" alt="idea_sketches" src="https://user-images.githubusercontent.com/46717848/169256819-18a3fd34-bd1a-40a7-94d5-e92eb51c5248.png">
