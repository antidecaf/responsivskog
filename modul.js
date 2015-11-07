// ==UserScript==
// @name         Responsiv skog
// @namespace    http://underskog.no/
// @version      0.1
// @description  Mobilteleskogen
// @author       Antidecaf
// @match        https://underskog.no/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function($) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
    $('head').append('<style type="text/css">@media screen and (min-width:769px){#togglesidebar{display:none}}@media screen and (max-width:768px){body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Arial,Helvetica,sans-serif;font-size:14px}body #maincontent.frontpage_maincontent #post_stream_block .post_list,body .wrapper{width:auto}.site_search #site_search_field #site_search_input{width:200px;height:1.6em;line-height:1.6em}.site_search #site_search_field .site_search_dropdown{min-width:200px!important;right:10px!important;left:10px}input[type=text],input[type=number],textarea{font-size:16px}#header_searchbox,#maincontent,#messenger_container,body #centreColumn,body #maincontent.frontpage_maincontent{width:100%}body .wrapper{padding:0 10px}.post_list .post{padding:10px 2px}img{max-width:100%}.dottedRight{border:0}body #menu #user_menu{padding:5px 0 10px;width:100%}#user_menu li{display:inline-block;width:45%;padding:5px 1.5%;background:#eee;margin:3px 1%!important;text-align:center;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#header{padding:0!important;height:40px!important}#header h1{width:100%!important;margin:0!important;font-size:22px!important;height:32px!important;text-align:center}#header_searchbox{padding-right:0!important;padding-top:10px!important;padding-bottom:4px;text-align:center}#menu .wrapper ul:nth-child(2){clear:both;text-align:center}#menu .wrapper ul:nth-child(2) li{float:none;display:inline;margin:0 5px}body #maincontent{padding-right:0}.full_post_view .post h1,.full_post_view .post h2{word-break:break-word;font-size:22px}ul.metadata>li{padding:0}ul.metadata>li.bullet{background-position:0 .3em!important;padding-left:20px}.thread_list li .thread .thread_meta .new_comment_count{float:none}.calendar_biglist>ul>li h2,p{font-size:14px}.text p{font-size:14px!important}#market_panel .market_item_list>ul>li h3,.small{font-size:12px}#content{position:relative}.togglesidebar{margin-bottom:18px;padding-left:10px;padding-right:10px;margin-right:5px}.calendar_bar_frontpage,.sidebar_frontpage{display:none;float:none;background:rgba(255,255,255,.95);position:absolute;left:1%;top:32px;width:98%;padding:10px;border:1px solid #ccc;box-sizing:border-box;box-shadow:0 2px 5px rgba(0,0,0,.25);z-index:11}.sidebarsubpage{float:none;clear:both;width:100%;padding-top:20px}.market_item_block{list-style:none;padding:0 5px 0 0}}</style>');
    if ($('.frontpage_maincontent').length) {
    	$('#content').prepend('<button id="togglesidebar" class="togglesidebar">Sidebar</button> <button id="togglecalendar" class="togglesidebar">Kalender</button>');
	}
    $('#togglesidebar').click(function() {
	  $('.sidebar_frontpage').toggle();
	  return false;
	});
    $('#togglecalendar').click(function() {
	  $('.calendar_bar_frontpage').toggle();
	  return false;
	});
})(jQuery);