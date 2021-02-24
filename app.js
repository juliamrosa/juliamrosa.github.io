$(document).ready(function() {
    var aboutMeNames = [ "On top of a mountain in South Korea", "Singing at the Red Lion in Manhattan", "Santorini, Greece", "Babson Alumni Event", "Oil Paintings", "Oil Paintings", "Sky Diving on Long Island", "Sunset in Southampton"];
    var aboutMeImages = [ "southkorea.jpg", "red-lion.jpg", "greece.jpg", "babson.jpg", "girl-1.png", "girl-2.png", "sky-diving.jpg", "beach-sunset.png"];

    var currentIndex = 0;

    function changeNameAndImage() {
        $("#carousel-items img").attr("src", "images/" + aboutMeImages[currentIndex]);
        $("#carousel-items img").attr("alt", aboutMeNames[currentIndex]);
        $(".carousel h2").text(aboutMeNames[currentIndex]);
    }

    changeNameAndImage();

    $(".right-handle").on("click", function(){
        if (currentIndex === 7) {
            currentIndex = 0;

            changeNameAndImage();
        } else {
            currentIndex = currentIndex + 1;

            changeNameAndImage();
        }
    });

    $(".left-handle").on("click", function(){
        console.log(".left-handle")
        if (currentIndex === 0) {
            currentIndex = 7;
            
            changeNameAndImage();
        } else {
            currentIndex = currentIndex - 1;

            changeNameAndImage();
        }
    });

    // $(".right-handle").on("click", function(){
    //     if (currentIndex === 7) {
    //         return;
    //     } else {
    //         currentIndex = currentIndex + 1;

    //         changeNameAndImage();
    //     }
    // });

    // $(".left-handle").on("click", function(){
    //     console.log(".left-handle")
    //     if (currentIndex === 0) {
    //         return;
    //     } else {
    //         currentIndex = currentIndex - 1;

    //         changeNameAndImage();
    //     }
    // });



});