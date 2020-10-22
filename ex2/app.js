let idx = 0

$('#myForm').submit(function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    console.log(title)
    console.log(rating)
    
    $('ul').append(`<li><b>Movie:</b> ${title} &ensp; >>> &ensp; <b>Rating:</b> ${rating} &ensp;</li>`)
    $('li').eq(idx).append(`<button id="removebtn${idx}">remove</button><br><br>`)

    let $removeBtn = $(`#removebtn${idx}`)
    $removeBtn.on('click', function() {
        console.log('clicked')
        $removeBtn.parent().remove()
    }) 

    idx++

});
