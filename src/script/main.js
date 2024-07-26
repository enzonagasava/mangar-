$(document).ready(function(){

    if(window.innerWidth <= 768){
        var h1 = document.createElement("h1")

        h1.innerHTML= "por ambientes mais autênticos"
        $('#logoHero').prepend(h1)
    }

    if(window.innerWidth <= 768){
        var footer = document.createElement('footer')

        footer.innerHTML = `<footer style="display: flex;"> <div style="background-color: #fff; width: 430px; height: 145px; position: relative; padding-top: 19px; padding-left: 71px; ">
                    <img style="padding-bottom: 33px;" src="./dist/images/icon 1.png" alt="logo">
                </div>
                <div style="padding-top:30px; padding-right: 45px; display: flex; justify-content: space-between; flex-direction: column;">
                    <ul>
                        <li>
                            <p>11 99999-9999</p>
                        </li>
                        <li>
                            <a style="text-decoration: none; color: #000;" href="#">email@email.com</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a style="text-decoration: none; color: #000;" href="#">Instagram</a>
                        </li>
                        <li>
                            <a style="text-decoration: none; color: #000;" href="#">WhatsApp</a>
                        </li>
                    </ul>
                </div> </footer<`

                $('.footerMobile').prepend(footer)
    }

    $('.hero__content__carousel').slick({
        autoplay: true,
        infinite:true,
        speed:400,
        fade: true,
        cssEase: 'linear',
        arrows:false
    })

    $('.method__content__item--card').slick({
        arrows:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesToScroll: 1,
        nextArrow: '.next-arrow',
        prevArrow: '.prev-arrow',
    })

    $(".project__content__item--carousel").slick({
        infinite:true,
        slidesToShow:3,
        vertical: true,
        verticalSwiping: true,
        autoplay:true,
        autoplaySpeed:700,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                vertical: false,
                verticalSwiping: false,
                infinite:true,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                vertical: false,
                verticalSwiping: false,
            }
        }]
    })
})
