var form = "<form id='new_comment' placeholder='add your comment here'><textarea></textarea><input id='authorName' type='text' value='authorName'></input><input id='submit_comment' type='submit' name='submit_comment'></input></form>";

// Shorthand for document ready
$(function(){
  
  $('#new_comment_button').on('click', function(e) {
    $('#new_comment_button').hide();
    $('#comment_area').append(form);

  });

});
