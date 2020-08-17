$(function(){
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    
    //$('input').val()

    let newItem = $(this).find('input').val();

    $('ul').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  })
})