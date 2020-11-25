    // Fixme: fix for «
    // var links = $('div.issue div.next-prev-links');
    // links.filter(function() {
    // 	return $(this).text().startsWith('«');
    // }).text(function (index, text) {
    // 	return text.slice(1);
    // }).prepend('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    // links.find('a').filter(function() {
    // 	return $(this).text().endsWith('»');
    // }).text(function (index, text) {
    // 	return text.slice(0, -1);
    // }).append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');

    /*
    $('#top-menu, #header').wrapInner('<div class="outer-container"></div>');
    $('#main-menu').wrapInner('<div class="outer-container"></div>').detach().appendTo('#header');

    $('#top-menu .home').text('').clone().prependTo('#header h1');
    $('#top-menu .home').parent().remove();

    $('input.questions-search').wrap('<span class="live_search normal"></span>');

    $(window).load(function(){
	$('input.autocomplete, input.live_search_field, input#q').wrap('<span class="icon-search"></span>');

	$('#quick-search select').select2({
	    width: 'element'
	});

	$('#account:not(.cms) a').each(function() {
	    $(this).attr('title', $(this).text()).text('');
	});

	$('#account:not(.cms) .my-page').parent().detach().prependTo('#account ul:first');
    });
    */
