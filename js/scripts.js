function newItem() {
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert('Must Enter a Value');
  } else {
    $('#list').append(
      $('<li></li>').append(document.createTextNode(inputValue))
    );
  }


  $('li')
    .last()
    .append($('<crossOutButton></>').append(document.createTextNode('X')));

  $('li')
    .unbind()
    .dblclick('dblclick', (event) => {
      $target = $(event.target);
      if ($target.hasClass('strike')) {
        $target.removeClass('strike');
      } else {
        $target.addClass('strike');
      }
    });

  $('crossOutButton').on('click', (event) => {
    $target = $(event.target).parent();
    $target.addClass('delete');
  });

  $('#list').sortable();
}
