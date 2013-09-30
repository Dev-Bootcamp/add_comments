var form = "<form id='new_comment'><textarea name='new_comment' placeholder='add your comment here'></textarea><input id='authorName' type='text' placeholder='author name here'></input><button type='submit' id='submit_comment' name='submit_comment'>submit</button></form>";
var button = "<button id='new_comment_button'>New Comment</button>";
// Shorthand for document ready
$(function(){
  
  $('#comment_area').on('click', '#new_comment_button', function(e) {
    e.preventDefault();
    $('#new_comment_button').remove();
    $('#comment_area').append(form);
  });

  $('#comment_area').on('submit', '#new_comment', function(e) {
    e.preventDefault();
    $('#new_comment').remove();
    $('#comment_list').append('<li>Comment Stuff</li>');
    $('#comment_area').append(button);
  });

});
