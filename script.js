var hi = 0 + 3 + 4;
console.log(hi);
//fetching all anchor tags
var AllnavAnchortag = document.querySelectorAll("#Header-links a");
console.log(AllnavAnchortag);

for (let i = 0; i < 4; i++) {
    AllnavAnchortag[i].addEventListener("click", function (event) {
        event.preventDefault();

        var targetSectionId = AllnavAnchortag[i].textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var smoothScroll = setInterval(
            function () {
                //putting this inside func bcoz evertime we should need new coordinate values
                var targetSectionCoordinates = targetSection.getBoundingClientRect();

                if (targetSectionCoordinates.top <= 0) {
                    clearInterval(smoothScroll);  //disabling click by redirecting action
                    return;
                }
                window.scrollBy(0, 15);
            }, 15
        )

        // console.log(targetSection);
        // console.log(targetSectionId);
    });
}
for (let i = 4; i < AllnavAnchortag.length; i++) {
    AllnavAnchortag[i].addEventListener("click", function (event) {
        event.preventDefault();

        var targetSectionId = AllnavAnchortag[i].textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var smoothScroll = setInterval(
            function () {
                //putting this inside func bcoz evertime we should need new coordinate values
                var targetSectionCoordinates = targetSection.getBoundingClientRect();

                if (targetSectionCoordinates.top <= 0) {
                    clearInterval(smoothScroll);  //disabling click by redirecting action
                    return;
                }
                window.scrollBy(0, 20);
            }, 10
        )

        // console.log(targetSection);
        // console.log(targetSectionId);
    });
}



