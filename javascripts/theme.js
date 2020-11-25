/* Theme functions */

function get_path_for_wiki_edit() {
    var pathname = window.location.pathname;
    console.log('get_path_for_wiki_edit', pathname)
    if (pathname.endsWith('/edit')) {
	return pathname.slice(0, pathname.lastIndexOf("\/"));
    } else
	return pathname;
}

jQuery(document).ready(function($){

    // Move + of new-object into a span element
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

    // Implement a tab for wiki form/preview
//     var wiki_form = $('form#wiki_form');
//     if (wiki_form.length > 0) {
// 	var preview = $('div#preview');
// 	wiki_form.append('\
// <div id="wiki-tabs" class="tabs">\
//   <ul>\
//     <li><a id="tab-wiki_form" class="selected" onclick="showTab(\'wiki_form\', this.href); this.blur(); return false;" href="">Edit</a></li>\
//     <li><a id="tab-preview" class="" onclick="showTab(\'preview\', this.href); this.blur(); submitPreview(get_path_for_wiki_edit() + \'/preview\', \'wiki_form\', \'preview\'); return false;" href="">Preview</a></li>\
//   </ul>\
// </div>\
// <div id="tab-content-wiki_form" class="tab-content"></div>\
// <div id="tab-content-preview" class="tab-content"></div>\
// ');
// 	wiki_form.find('div.box').detach().appendTo('div#tab-content-wiki_form');
// 	preview.detach().appendTo('div#tab-content-preview');

// 	// remove preview button
// 	var preview_button = $('a.button[accesskey=r]');
// 	var buttons = preview_button.parent();
// 	preview_button.detach();
// 	// move save/cancel : done by wiki_form.append
// 	// buttons.detach();
// 	// $('div#wiki-tabs').before(buttons);
//     }

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
