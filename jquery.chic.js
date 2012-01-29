/*

Chic v.01
JQuery plugin for Styled Selects

*/


;(function($) {
    $.fn.chic = function() {
        return this.each(function() {
            if (this.tagName == 'SELECT') {
                var title = $(this).attr('title');
                $(this)
                .css({
                    'z-index': 10,
                    'opacity': 0,
                    '-khtml-appearance': 'none',
                })
                .wrap('<div class="chic-selector">')
                .before('<span>' + title + '</span>')
                .change(function() {
                    val = $('option:selected', this).text();
                    $(this).prev().text(val).css({ 'color':'#222' });
                });
            };
        });
    };
} (jQuery));




