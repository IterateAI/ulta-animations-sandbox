/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

// This is only for the "Add to Bag" button that has different markup for the active state
function showActive(e) {
  $(e).closest('.button-container').addClass('show-active');
  $(e).parent().find('.button.active .qty').data('count', 1);
  $(e).parent().find('.button.active .qty').text(1);
  $(e).attr('disabled', false);
}

// Change quantity in "Add to Bag" button
function qtyChange(e, direction) {
  var countEl = $(e).siblings('.qty');
  var count = countEl.data('count');
  var maxCount = countEl.data('max');
  var newCount;
  
  if (direction === 'up') {
    newCount = count + 1;
  } else {
    newCount = count - 1;
  }
  
  if (newCount <= 0) {
    countEl.closest('.button-container').removeClass('show-active');
  } 
  
  if (newCount >= maxCount) {
    countEl.siblings('.increment--up').attr('disabled', true)
  } else {
    countEl.siblings('.increment--up').attr('disabled', false)
  }
  
  countEl.text(newCount)
  countEl.data('count', newCount)  
}


// Color selector animation controls
function selectColor(e) {
  if ($(e).hasClass('selected')) {
    $(e).removeClass('selected');
    $(e).addClass('deselected');
  } else {
    $(e).addClass('selected');
    $(e).removeClass('deselected');
    $(e).siblings('.color-selector.selected').addClass('deselected').removeClass('selected');
  }
  
  setTimeout(function() {
    $('.color-selector.deselected').removeClass('deselected');
   }, 600);

}