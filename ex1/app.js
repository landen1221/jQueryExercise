// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let's get redy to party with jQuery!")

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('img').addClass('image-center')

// Remove the last paragraph in the article.
$('p').eq(-1).remove()


// Set the font size of the title to be a random pixel size from 0 to 100.
const $h1 = $('h1')
$h1.css('font-size', function() {
    return Math.floor(Math.random() * 100)
})


// Add an item to the list; it can say whatever you want.
$('ol').append('<li>Is this a little dog or a big cup?</li>')

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append("<p>You don't see it, but there used to be a list here and it was a terrible idea!<p>");

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

const $input = $('input')

$input.on('change', function() {
    let rbg = `${$input.eq(0).val()}, ${$input.eq(1).val()}, ${$input.eq(2).val()} `
    $('body').css('background-color', `rgb(${rbg})`)
})  
    
// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function() {
    $(this).fadeOut(3000, function () {
        $(this).remove()
    })
})