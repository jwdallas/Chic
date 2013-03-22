/*
   Chic Inputs
   jQuery plugin for Styled Selects & Checkboxes
   https://github.com/jwdallas/Chic
   
   Created by Jonathan Dallas
   MIT License
   
*/


;(function($) {
   $.fn.chic = function() {
    return this.each(function() {
      if (this.tagName == 'SELECT') {
        $(this)
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-selector>')
         .before($('<span>').text($(this).attr('title')))
         .change(function() {
           val = $('option:selected', this).text();
           $(this).prev().text(val);
         });
      };
      if ($(this).is('input[type=checkbox]')) {
        $(this)
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-checkbox>')
         .removeClass('chic')
         .change(function() {
           if ($(this).is(':checked')) { $(this).parent().addClass('checked');    
              $(this).parents('label').addClass('checked') }
           else { $(this).parent().removeClass('checked');
              $(this).parents('label').removeClass('checked') }
         });
        if ($(this).is(':checked')) { $(this).parent().addClass('checked');
           $(this).parents('label').addClass('checked') }
      };
    });
  };
})(jQuery);
