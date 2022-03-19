const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu= document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click",hambHandler);
function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open")
    hamb.classList.toggle("active")
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu)
}


$('.popular_slide').slick({
    slidesToShow: 4,
    responsive:
        [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow:3,
                }
            },

            {
                breakpoint: 937,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
})

$('.subscriptions_slide').slick({
    slidesToShow: 3,
    responsive:
        [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                }
            },


            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
})

