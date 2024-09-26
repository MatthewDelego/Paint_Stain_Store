


$(function () {
   /*for dropdown menus*/

    $(".dropdown-menu [data-bs-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        // close other dropdowns
        $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
        $(this).parents(".dropdown-menu").first().find("[aria-expanded='true']").attr("aria-expanded", false);

        // mark these as open
        $(this).attr("aria-expanded", true);
        $(this).siblings(".dropdown-menu").toggleClass("show");

        // and close submenus when the main dropdown gets closed
        $(this)
        .parents(".nav-item.dropdown")
        .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
            $(".dropdown-submenu [aria-expanded='true']").attr("aria-expanded", false);
        });
    });



    
       /*Open & Close Search */
    
    $('[data-bs-toggle="search"]').on("click", function () {
        $(".search-area-wrapper").show();
        $(".search-area-input").focus();
    });

    $(".search-area-wrapper .close-btn").on("click", function () {
        $(".search-area-wrapper").hide();
    });

    
      /*GLightbox*/
    

    const lightbox = GLightbox({
        touchNavigation: true,
        //loop: true,
        autoplayVideos: true,
    });







   /*increase or decrease product purchased*/ 

    $(".btn-items-decrease").on("click", function () {
        var input = $(this).siblings(".input-items");
        if (parseInt(input.val(), 10) >= 1) {
            input.val(parseInt(input.val(), 10) - 1);
        }
    });

    $(".btn-items-increase").on("click", function () {
        var input = $(this).siblings(".input-items");
        input.val(parseInt(input.val(), 10) + 1);
    });

   /*bottom scroll to the top button*/

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 1500) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
    });

    $("#scrollTop").on("click", function () {
        $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000
        );
    });




   /* main carousel*/
    var circleSlider = $(".circle-slider");
    circleSlider
    .on({
        "initialized.owl.carousel": function () {

            circleSlider.parents("section").removeClass("mh-full-screen");
        },
    })
    .owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        responsiveClass: true,
        navText: [
            '<img src="' + basePath + 'img/prev-dark.svg" alt="" width="50">',
            '<img src="' + basePath + 'img/next-dark.svg" alt="" width="50">',
            ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 1,
                nav: false,
                dots: true,
            },
            1120: {
                items: 1,
                dots: false,
                nav: true,
            },
        },
        onRefresh: function () {
            circleSlider.find(".item").height("");
        },
        onRefreshed: function () {
            var maxHeight = 0;
            var items = circleSlider.find(".item");
            items.each(function () {
                var itemHeight = $(this).outerHeight();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            items.height(maxHeight);
        },
    });




/* bottom home page product carousel*/
    $(".product-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        navText: [
            '<img src="' + basePath + 'img/prev.svg" alt="" width="50">',
            '<img src="' + basePath + 'img/next.svg" alt="" width="50">',
            ],
        smartSpeed: 400,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    });

    AOS.init();

    AOS.init({
        disable: 'mobile'
    });




    
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
  .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
                event.preventDefault()

        } else {
           window.location.href = 'checkout3.html';
       }

       form.classList.add('was-validated')
   }, false)
  })
})()

/*Credit card validation*/
function validateForm(event) {
    var cardName = document.getElementById("card-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    var postcode = document.getElementById("postcode").value;

    // Perform validation
    if (cardName === "" || cardNumber === "" || expiryDate === "" || cvv === "" || postcode === "") {
      alert("Please fill in all the required fields.");
      event.preventDefault(); // Prevent form submission
  } else {

  }
}
/*Type it */
new TypeIt("#simpleUsage", {
  strings: "And the rest is history!!",
  speed: 50,
  waitUntilVisible: true,
}).go();





