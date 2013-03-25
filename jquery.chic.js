/*!
   Chic Inputs
   JQuery plugin for Styled Selects & Checkboxes
   
   Jonathan Dallas
*/


;(function($) {
   $.fn.chic = function() {
    return this.each(function() {
      var $el = $(this);
      if (this.tagName == 'SELECT' && $el.parents('.chic-selector').length == 0 ) {
        $el
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-selector>')
         .before($('<span>').text($(this).find(':selected').text()))
         .change(function() {
           val = $('option:selected', this).text();
           $el.prev().text(val);
         });
      };
      if ($el.is('input[type=checkbox]')) {
        $el
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-checkbox>')
         .removeClass('chic')
         .change(function() {
           if ($el.is(':checked')) { $el.parent().addClass('checked');    
              $el.parents('label').addClass('checked') }
           else { $el.parent().removeClass('checked');
              $el.parents('label').removeClass('checked') }
         });
        if ($el.is(':checked')) { $el.parent().addClass('checked');
           $el.parents('label').addClass('checked') }
      };
    });
  };
})(jQuery);
