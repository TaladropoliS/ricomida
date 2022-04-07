$(document).ready(function () {
    $('.showPointer').hide();
    $('.hideClick').click(function () {
        $('.hideCard').hide();
        $('.showPointer').show();
    })
})

$(document).ready(function () {
    $('.showCards').click(function () {
        $('.hideCard').show();
        $('.showPointer').hide();
    })
})