$(document).ready(function () {

  // Empty links prevent default
  $("a[href='#']").click(function(e){
    e.preventDefault();
  });

  // Filter more
  var moreData = $('.filter-type_list-more');
  moreData.hide();
  $('.filter-more_btn').click(function () {
    $(this).parent().find(moreData).show(3.5);
    $(this).addClass('hidden');
    $(this).siblings('.filter-less_btn').removeClass('hidden');
  });
  $('.filter-less_btn').click(function () {
    $(this).parent().find(moreData).hide(1.5);
    $(this).addClass('hidden');
    $(this).siblings('.filter-more_btn').removeClass('hidden');
  });

  // Custom select with select2
  var baseSelect = $('.characteristic-select-base');
  if (baseSelect) {
    baseSelect.select2({
      minimumResultsForSearch: Infinity,
      dropdownCssClass: 'gray-select'
    });
  }
});
