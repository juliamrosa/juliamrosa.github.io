$(document).ready(function() {
    var aboutMeNames = [ "On top of a mountain in South Korea", "Babson Alumni Event", "Me in Santorini", "Sky Diving on Long Island", "Sunset in Southampton", "Oil Paintings", "Oil Paintings"];
    var aboutMeImages = [ "southkorea.jpg", "babson.jpg", "greece.jpg", "sky-diving.jpg", "beach-sunset.png", "girl-1.png", "girl-2.png"];

    var currentIndex = 0;

    function changeNameAndImage() {
        $("#carousel-items img").attr("src", "images/" + aboutMeImages[currentIndex]);
        $("#carousel-items img").attr("alt", aboutMeNames[currentIndex]);
        $(".carousel h2").text(aboutMeNames[currentIndex]);
    }

    changeNameAndImage();

    $(".right-handle").on("click", function(){
        if (currentIndex === 6) {
            return;
        } else {
            currentIndex = currentIndex + 1;

            changeNameAndImage();
        }
    });

    $(".left-handle").on("click", function(){
        console.log(".left-handle")
        if (currentIndex === 0) {
            return;
        } else {
            currentIndex = currentIndex - 1;

            changeNameAndImage();
        }
    });


});