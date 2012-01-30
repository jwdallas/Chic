/*

Chic v1.0
JQuery plugin for Styled Selects

*/


;(function($) {
    $.fn.chic = function() {
        return this.each(function() {
            if (this.tagName == 'SELECT') {
                var text = $(this).attr('title') || $(this).attr('name');
                $(this)
                .css({
                    'z-index': 10,
                    'opacity': 0,
                    '-khtml-appearance': 'none',
                })
                .wrap('<div class="chic-selector">')
                .before('<span>' + text + '</span>')
                .change(function() {
                    val = $('option:selected', this).text();
                    $(this).prev().text(val).css({ 'color':'#444' });
                });
            };
        });
    };
} (jQuery));




