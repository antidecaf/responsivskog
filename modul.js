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
    $('head').append('<style type="text/css">@media screen and (max-width:768px){body{font-size:15px}body #maincontent.frontpage_maincontent #post_stream_block .post_list,body .wrapper{width:auto}.site_search #site_search_field #site_search_input{width:200px}.site_search #site_search_field .site_search_dropdown{min-width:200px!important;right:0!important}#header_searchbox,#maincontent,#messenger_container,body #centreColumn,body #maincontent.frontpage_maincontent{width:100%}body .wrapper{padding:0 10px}.post_list .post{padding:10px 2px}img{max-width:100%}.dottedRight{border:0}body #menu #user_menu{padding:5px 0 10px;width:100%}#user_menu li{display:inline-block;width:45%;padding:5px 1.5%;background:#eee;margin:3px 1%!important;text-align:center;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#header{padding:5px 0!important}#header h1{width:100%!important;margin:0!important;padding:0 0 3px!important;font-size:16px!important;height:12px!important;text-align:center}#header_searchbox{padding-right:0!important;text-align:center}#menu .wrapper ul:nth-child(2){clear:both;text-align:center}#menu .wrapper ul:nth-child(2) li{float:none;display:inline;margin:0 5px}body #maincontent{padding-right:0}.full_post_view .post h1,.full_post_view .post h2{word-break:break-word}ul.metadata>li{padding:0}ul.metadata>li.bullet{background-position:0 .3em!important;padding-left:20px}}</style>');
})(jQuery);