$(document).ready(function () {
    var swiper = new Swiper('.swiper-container-hero', {


        autoplay: {

            delay: 4000,
            disableOnInteraction: false,
        }
        , loop: true,
        // pagination: {

        // 	el: '.swiper-pagination',
        // 	clickable: true,
        	
        // }


    });

    var swiper2 = new Swiper('.swiper-container-offer', {
        autoplay: {

            delay: 4500,
            disableOnInteraction: false,
        },
        // , loop: true,
        // pagination: {

        //     el: '.swiper-pagination',
        //     clickable: true,

        // },
        breakpoints: {
            576: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 1,

            },
            992: {
                slidesPerView: 1,

            },
            1200: {
                slidesPerView: 1,

            },
            1400: {
                slidesPerView: 1,

            },
            1680: {
                slidesPerView: 1,

            }
        }
    });

    $("#owl-example").owlCarousel({
        loop: true,
        dots:false,
        pagination: false,
        responsiveClass:true,
        margin:30,
//         navigation:true,
// navigationText: [
//    "<i class='fa fa-chevron-left'></i>",
//    "<i class='fa fa-chevron-right'></i>"
// ],
        autoPlay: 3000,
        items : 1,
       autoplayHoverPause: true,
       stopOnHover:true,
        responsive: {
          0: {
            items: 2,
            margin:15,

          },
          600: {
            items: 2,
            margin:15,
            dots:false,
          },
          1000: {
            items: 1,
            dots:false,
           
          }
        }
    });

    $("#owl-examplelBookmark").owlCarousel({
        loop: true,
        dots:false,
        pagination: false,
        responsiveClass:true,
        margin:30,
        navigation:true,
navigationText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"
],
        autoPlay: 3000,
        items : 5,
       autoplayHoverPause: true,
       stopOnHover:true,
        responsive: {
          0: {
            items: 2,
            margin:15,

          },
          600: {
            items: 2,
            margin:15,
            dots:false,
          },
          1000: {
            items: 5,
            dots:false,
           
          }
        }
    });


    // $('.tab-wrapper.v1 .item-tab .tab-btn a').click(function(e){
    //     e.preventDefault();
        
    //     var _item     = $(this).closest('.item-tab');
    //     var _hasClass = 'selected';
    //     var _all      = $('.tab-wrapper.v1 .item-tab');
        
    //     if(_item.hasClass(_hasClass)){
    //       _item.find('.tab-btn a i').removeClass('fa-minus-square').addClass('fa-plus-square')
    //             .closest('.item-tab')
    //             .find('.tab-content')
    //             .stop()
    //             .slideUp(400, function(){
    //               _item.removeClass('selected');
    //             });
          
    //     }else{
    //       _all.find('.tab-btn a i').removeClass('fa-minus-square').addClass('fa-plus-square')
    //             .closest('.item-tab')
    //             .find('.tab-content')
    //             .stop()
    //             .slideUp(400, function(){
    //               _all.removeClass('selected');
    //             });
          
    //       _item.find('.tab-btn a i').removeClass('fa-plus-square').addClass('fa-minus-square')
    //             .closest('.item-tab')
    //             .find('.tab-content')
    //             .stop()
    //             .slideDown(400, function(){
    //               _item.addClass('selected');
    //             });
    //     }
    //   });
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

 
    

 $('.abc').tooltip({
    trigger: 'hover',
    'show': true,
    'placement': 'left'
    
 });


 $('#list').click(function(event){
     event.preventDefault(); 
    //  alert('list'); 
     $('.product .items').addClass('list-group-item');
   
    
    });
 $('#grid').click(function(event){
     event.preventDefault();
    //  alert('grid'); 
     $('.product .items').removeClass('list-group-item');
     $('.product .items').addClass('grid-group-item');});

    


   





// Price Range slider
function addSeparator(nStr) {
    nStr += '';
    var x = nStr.split(',');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function rangeInputChangeEventHandler(e){

    var rangeGroup = $(this).attr('name'),
    
        minBtn = $(this).parent().children('.min'),
        maxBtn = $(this).parent().children('.max'),
        range_min = $(this).parent().children('.range_min'),
        range_max = $(this).parent().children('.range_max'),
        minVal = parseInt($(minBtn).val()),
        maxVal = parseInt($(maxBtn).val()),
        
        origin = $(this).className;
      

    if(origin === 'min' && minVal > maxVal-5){
        $(minBtn).val(maxVal-5);
    }
    var minVal = parseInt($(minBtn).val());
    $(range_min).html(addSeparator(minVal*1000) + ' &#8377;');


    if(origin === 'max' && maxVal-5 < minVal){
        $(maxBtn).val(5+ minVal);
    }
    var maxVal = parseInt($(maxBtn).val());
    $(range_max).html(addSeparator(maxVal*1000) + ' &#8377;');
}

$('input[type="range"]').on( 'input', rangeInputChangeEventHandler);


    // compaire products

$('[data-filter="trigger"]').on("change", function() {
    var t = $(this).find("option:selected").val().toLowerCase();

	$('[data-filter="target"]').css("display", "none"); 
	$("#" + t).css("display", "table-row-group"); 
	if(t == "all") {
		$('[data-filter="target"]').css("display", "table-row-group")
	}
	$(this).css("display", "block"); 
});



function addNewClass() {
    $('.fxt-template-animation').imagesLoaded().done(function (instance) {
        $('.fxt-template-animation').addClass('loaded');
    });
}
addNewClass();

/*-------------------------------------
Toggle Class
-------------------------------------*/
$(".toggle-password").on('click', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});




    
});

   // select dropdown subcategries
   var subByCategory = {
    Electronic: ["Tv", "Refrigirator", "Washing Machine", "Mobile", "Air Conditioners"],
    Sports: ["Bicycle", "Skates"],
    Music: ["Harmonium", "Piano", "Violin", "Guitar"]
}

function changecat(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (categoryId in subByCategory[value]) {
            catOptions += "<option>" + subByCategory[value][categoryId] + "</option>";
        }
        document.getElementById("subCategoresS").innerHTML = catOptions;
    }
}

   // select dropdown subcategries
   var subByCategory1 = {
    Electronic: ["Tv", "Refrigirator", "Washing Machine", "Mobile", "Air Conditioners"],
    Sports: ["Bicycle", "Skates"],
    Music: ["Harmonium", "Piano", "Violin", "Guitar"]
}

function changecat1(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (categoryId in subByCategory1[value]) {
            catOptions += "<option>" + subByCategory1[value][categoryId] + "</option>";
        }
        document.getElementById("subCategoresSS").innerHTML = catOptions;
    }
}

