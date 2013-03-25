/*!
   Chic Inputs
   JQuery plugin for Styled Selects & Checkboxes
   
   Jonathan Dallas
   Anthony Ettinger (a few modifications)
*/

;(function($) {
   $.fn.chic = function() {
    return this.each(function() {
      var $el = $(this);

      if ( this.tagName == 'SELECT' && !$el.parents('.chic-selector').length ) {
        $el
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-selector>')
         .before($('<span>').text($el.find(':selected').text()))
         .change(function() {
           var val = $('option:selected', this).text();
           $el.prev().text(val);
         });
      }

      if ( $el.is('input[type=checkbox]') && !$el.parents('.chic-checkbox').length ) {
        $el
         .css({ 'z-index': 10, opacity: 0, '-khtml-appearance': 'none' })
         .wrap('<div class=chic-checkbox>')
         .removeClass('chic')
         .change(function() {
           var checked = $el.is(':checked');

           $el.parent()[ checked ? 'addClass' : 'removeClass' ]('checked');
           $el.parents('label')[ checked ? 'addClass' : 'removeClass' ]('checked');
         });
      }
    });
  };
})(jQuery);
