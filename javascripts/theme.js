/* Theme functions */

jQuery(document).ready(function($){

    var new_object = $('a#new-object');
    new_object.text('');
    new_object.append('<span>+</span>')

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

    // Wiki edit button group : remove | and add button class
    // input should be button
    var button_group = $('form#wiki_form > p');
    button_group.contents().filter(function() {
	return $(this).text().includes('|');
    }).remove();
    button_group.find('a').toggleClass('button');
    button_group.find('a:last').toggleClass('button-danger');

    // Replace navigation icon «» in calendar page
    var query_form_links = $('form#query_form p a');
    query_form_links.filter(function() {
    	return $(this).text().startsWith('«');
    }).text(function (index, text) {
    	return text.slice(1);
    }).prepend('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    query_form_links.filter(function() {
	return $(this).text().endsWith('»');
    }).text(function (index, text) {
	return text.slice(0, -1);
    }).append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');

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
});
