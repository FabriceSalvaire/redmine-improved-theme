/* Theme functions */

jQuery(document).ready(function($){

    // Wrap the list of sub-projects in a list
    var project_box = $('div.projects.box');
    project_box.append('<ul></ul>');
    var list = project_box.find('ul');
    project_box.find('a').detach().appendTo(list);
    list.find('a').wrap('<li></li>');
    project_box.contents().filter(function() {
    	return $(this).text() === ", ";
    }).remove();

    // Remove "edit this section"
    // div.wiki-page
    $('.contextual a.icon-only.icon-edit').text('');

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
});
