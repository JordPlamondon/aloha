$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
// $('subscribe-input').on('submit', function(event) {
//   event.preventDefault();
// if ( $()****finsih this***8
// });
$(".submitbutton").on("click",function() {
var regExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if (regExp.test($('.subscribe-input').val()) ){
  alert("Thank you for your Subscription");
} else { 
  alert("Try again");
}
});