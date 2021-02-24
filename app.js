$(document).ready(function() {
    var aboutMeNames = [ "On Stage", "Singing at the Red Lion in Manhattan", "Trio", "On top of a mountain in South Korea", "Santorini, Greece",  "Babson Alumni Event", "Sky Diving on Long Island", "Sunset in Southampton", "Me and my girl", "Cheesin'", "Oil Reference 1 on Canvas", "Oil Reference 2 on Canvas"];
    var aboutMeImages = [ "singing-profile.jpg", "red-lion.jpg", "band.jpg", "southkorea.jpg", "greece.jpg", "babson.jpg", "sky-diving.jpg", "beach-sunset.png", "rooney.jpg", "about-me.jpg", "girl-1.png", "girl-2.png"];

    var currentIndex = 0;

    function changeNameAndImage() {
        $("#carousel-items img").attr("src", "images/" + aboutMeImages[currentIndex]);
        $("#carousel-items img").attr("alt", aboutMeNames[currentIndex]);
        $(".carousel h2").text(aboutMeNames[currentIndex]);
    }

    changeNameAndImage();

    $(".right-handle").on("click", function(){
        if (currentIndex === 11) {
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
            currentIndex = 11;
            
            changeNameAndImage();
        } else {
            currentIndex = currentIndex - 1;

            changeNameAndImage();
        }
    });

});