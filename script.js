var timeDisplay = $("#currentDay");
timeDisplay.text(dayjs().format('MMM DD, YYYY'))

var saveButtons = $(".saveBtn");

// Set colors of hour blocks by time
$(document).ready(function () {

  $('.time-block').each(function(){
    if ($(this).attr("data-time") < dayjs().hour()){
      $(this).addClass('past')
    }
    else if ($(this).attr("data-time") == dayjs().hour()){
      $(this).addClass('present')
    } else{
      $(this).addClass('future')
    }
    
    $(this).children(".description").val(localStorage.getItem($(this).attr("data-time")))  
    
  })
 
});

// Set save buttons
saveButtons.on('click', function(){
  var timeValue = $(this).parent().attr("data-time")
  console.log(timeValue)
  var textValue = $(this).siblings(".description").val()
  console.log(textValue);

  localStorage.setItem(timeValue, textValue);

});