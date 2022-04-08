function newItem() {
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert('Must Enter a Value');
  } else {
    $('#list').append(
      $('<li></li>').append(document.createTextNode(inputValue))
    );
  }

  $('li').on('dblclick', (event) => {
    $target = $(event.target);
    $target.addClass('strike');
  });

  $('li')
    .last()
    .append($('<crossOutButton></>').append(document.createTextNode('X')));

  $('crossOutButton').on('click', (event) => {
    $target = $(event.target).parent();
    $target.addClass('delete');
  });

  $('#list').sortable();
  
}
