const isIE = /*@cc_on!@*/ false || !!document.documentMode;

const slider = () => {
    if (!isIE) {

        const prev = document.getElementsByClassName("prev");
        prev[0].addEventListener("click", () => {
            plusSlides(-1)
        });
        const next = document.getElementsByClassName('next');
        next[0].addEventListener("click", () => { plusSlides(+1) });
        const dots = document.querySelectorAll(".slider__thumb-item")

        function setCurrent(e) {
            let num = e.target.parentNode.getAttribute("data-slide");
            currentSlide(num)
        }
        dots.forEach(element => {
            element.addEventListener("click", (e) => {
                setCurrent(e)
            })
        });

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += +n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = +n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
}

export default slider;