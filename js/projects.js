$('#projects').on('mouseover', (event) => {
  var target = event.target;
  $(target).addClass('highlight');
})
$('#projects').on('mouseleave', (event) => {
  var target = event.target;
  $(target).removeClass('highlight');
})
