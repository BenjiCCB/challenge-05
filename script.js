// console.log(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));

var saveButtons = $(".saveBtn");
console.log(saveButtons);

// Set colors of hour blocks by time
$(document).ready(function () {

  $('.time-block').each(function(){
    console.log($(this).attr("data-time"))
    if ($(this).attr("data-time") < dayjs().hour()){
      $(this).addClass('past')
    }
    else if ($(this).attr("data-time") == dayjs().hour()){
      $(this).addClass('present')
    } else{
      $(this).addClass('future')
    }
  })
 
});


// Set save buttons
saveButtons.on('click', function(){
  var timeValue = $(this).parent().attr("data-time")
  console.log(timeValue)
  var textValue = $(this).siblings(".description").val()
  console.log(textValue);

  // store to localstorage

});

// create for loop to assign event listener for each button -- can either use object or different storage for each
// letterBtn.addClass('letter-button btn btn-info'); -- from 05.9