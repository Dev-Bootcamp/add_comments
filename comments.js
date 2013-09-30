var form = "<form id='new_comment'><textarea id='new_comment_text' name='new_comment_text' placeholder='add your comment here'></textarea><input id='authorName' type='text' placeholder='author name here'></input><button type='submit' id='submit_comment' name='submit_comment'>submit</button></form>";
var button = "<button id='new_comment_button'>New Comment</button>";

// Shorthand for document ready
$(function(){
  
  $('#comment_area').on('click', '#new_comment_button', function(e) {
    e.preventDefault();
    $('#new_comment_button').remove();
    $('#comment_area').append(form);
  });


  $('#comment_area').on('click', '#submit_comment', function(e) {
    e.preventDefault();
    var comment = $('#new_comment_text').val();
    var author = $('#authorName').val();
    console.log(comment);
    $('#new_comment').remove();
    $('#comment_list').append("<li>" + comment + "<span class='author'>" + author + "</span></li>");
    $('#comment_area').append(button);
  });

});
