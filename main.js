$(document).ready(function () {
    //SearchBar 1

    $('#imgid1').click('', function () {
        $('.col img').hide();
        $('#img1').show().fadeToggle(500).fadeIn(500);
    })
    //SearchBar 2
    $('#imgid2').click('', function () {
        $('.col img').hide();
        $('#img2').show().slideUp('slow').slideDown('slow');
    })
    //SearchBar 3
    $('#imgid4').click('', function () {
        $('.col img').hide();
        $('#img3').show().hide(2000).show(2000);
    })
    //SearchBar 4
    $('#imgid3').click('', function () {
        $('.col img').hide();
        $('#img4').show().animate({

            right: '250px',
            opacity: 0.5,
            height: '40px',
            width: '50px',

        }).animate({
            transition: '0.9s',
            right: '250px',
            opacity: 1.0,
            height: '320px',
            width: '420px',

        });
    })

    $('#imgid5').click('', function () {
        $('.col img').show(1000);
    })
    // For on click
    $('#img1').click(function () {

        $('#img1').fadeToggle(500).fadeIn(500);
    })
    $('#img2').click(function () {

        $('#img2').slideUp('slow').slideDown('slow');
    })
    $('#img4').click(function () {

        $('#img4').animate({

            right: '250px',
            opacity: 0.5,
            height: '40px',
            width: '50px',

        }).animate({
            transition: '0.9s',
            right: '250px',
            opacity: 1.0,
            height: '320px',
            width: '420px',

        });;
    })
    $('#img3').click(function () {

        $('#img3').hide(2000).show(2000);
    })
});