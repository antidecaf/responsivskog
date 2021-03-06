(function($) {
	/iP/i.test(navigator.userAgent) && $('*').css('cursor', 'pointer');
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
    $('head').append('<style type="text/css">@media screen and (min-width:769px){#togglecalendar,#togglemessenger,#togglesidebar,.unreadcomments{display:none}}@media screen and (max-width:768px){#menu ul,#menu ul li{float:none!important;display:inline-block}body{font-family:HelveticaNeue-Light,Helvetica Neue Light,Arial,Helvetica,sans-serif;font-size:14px;-webkit-text-size-adjust:110%;line-height:1.3em}body #maincontent.frontpage_maincontent #post_stream_block .post_list,body .wrapper{width:auto}body.fixed #page{margin:calc(1.6em + 70px) 0 20px}.site_search #site_search_field #site_search_input{width:200px;height:1.6em;line-height:1.6em;-webkit-text-size-adjust:100%}.site_search #site_search_field .site_search_dropdown{min-width:200px!important;right:10px!important;left:10px}input[type=text],input[type=number],textarea{font-size:16px}#header_searchbox,#maincontent,#messenger_container,body #centreColumn,body #maincontent.frontpage_maincontent{width:100%}#header h1,#menu{width:100%!important}body .wrapper{padding:0 10px}.post_list .post{padding:10px 2px}img{max-width:100%}.dottedRight{border:0}#menu{background:rgba(255,255,255,.95);overflow-x:visible;overflow-y:hidden;-webkit-overflow-scrolling:touch;height:1.6em;line-height:1.6em}.fixed #menu{position:fixed;top:0;z-index:9999}#menu .wrapper{white-space:nowrap;padding:0}#menu ul{height:1.5em;line-height:1.5em;padding-right:15px}#menu ul li{font-size:14px!important;margin:0 10px!important}#header{padding:0!important;height:44px!important}#header h1{margin:0!important;font-size:22px!important;height:36px!important;text-align:center}#header_searchbox{padding-right:0!important;padding-top:10px!important;padding-bottom:4px;text-align:center}body #maincontent{padding-right:0}.full_post_view .post h1,.full_post_view .post h2{word-break:break-word;font-size:22px}#maincontent.frontpage_maincontent .circle_threads_block h4{font-size:16px!important}#maincontent.frontpage_maincontent .circle_threads_block,#maincontent.frontpage_maincontent .circle_threads_block h4 a{font-size:11px!important}.calendar_biglist>ul>li h2,p,ul.list.compact>li{font-size:14px}ul.metadata>li{padding:0}ul.metadata>li.bullet{background-position:0 .3em!important;padding-left:20px}ul.metadata>li>label{display:block;text-align:left}.thread_list li .thread .thread_meta .new_comment_count{float:none}.sidebar .panel h2{font-size:16px}.text p{font-size:14px!important}#market_panel .market_item_list>ul>li h3,.small{font-size:12px}#content{position:relative}.togglesidebar{margin-bottom:18px;padding-left:10px;padding-right:10px;margin-right:5px;cursor:pointer}.calendar_bar_frontpage,.sidebar_frontpage{display:none;float:none;background:rgba(255,255,255,.95);position:absolute;left:1%;top:40px;width:98%;padding:10px;border:1px solid #ccc;box-sizing:border-box;box-shadow:0 2px 5px rgba(0,0,0,.25);z-index:11}.sidebarsubpage{float:none;clear:both;width:100%;padding-top:20px}.market_item_block{list-style:none;padding:0 5px 0 0}#togglemessenger{display:block;font-size:14px;margin:-17px 0 25px}img.zoomed_image{height:auto!important;left:0!important;margin-top:2.5em;box-shadow:0 0 15px rgba(0,0,0,.3);box-sizing:border-box}.user_messages_conversation_page .message_conversations_sidebar{width:100%;min-height:auto!important}.user_messages_conversation_page .message_conversations .message_conversation{padding:5px 5px 0}.user_messages_conversation_page .conversation_messages_pane{width:100%;padding-left:0}.user_messages_conversation_page .conversation_messages .conversation_message{width:auto}.user_messages_conversation_page .conversation_messages .conversation_message.conversation_message_from_you{margin-left:10px}.user_messages_conversation_page .conversation_messages .conversation_message.conversation_message_to_you{margin-right:10px}}</style>');
    $('#thread_activity_block>h3>a[href="/medlem/samtaler/samtaler"]').html('Samtaler du følger');
    $('#post_stream_block>h3>a[href="/nytt/innlegg"]').html('Fora du følger');
    if (hideMessages == true) {
	    $('#maincontent').prepend('<a href="#" id="togglemessenger" class="open">Vis beskjeder</a>');
	    $('head').append('<style type="text/css">@media screen and (max-width:768px){#tip_inbox,#messenger_inbox{display:none}}</style>');
	}
    if ($('.frontpage_maincontent').length) {
    	$('#content').prepend('<button id="togglesidebar" class="togglesidebar">Sidebar</button> <button id="togglecalendar" class="togglesidebar">Kalender</button>');
	}
    $('#togglesidebar').click(function() {
    	$('.calendar_bar_frontpage').hide();
	 	$('.sidebar_frontpage').toggle().addClass('togglebar');
	 	return false;
	});
    $('#togglecalendar').click(function() {
    	$('.sidebar_frontpage').hide();
	 	$('.calendar_bar_frontpage').toggle().addClass('togglebar');
	 	return false;
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.togglebar').length) {
	        if($('.togglebar').is(":visible")) {
	            $('.togglebar').hide();
	        }
	    }        
	});
	$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  > 83) {
        $('body').addClass('fixed');
    } else {
    		$('body').removeClass('fixed');
    }
	});
    $('#togglemessenger').click(function() {
    	$('#tip_inbox').toggle();
	 	$('#messenger_inbox').toggle();
	 	if ($('#togglemessenger').hasClass('open')) {
	 		$('#togglemessenger').removeClass('open').html('Skjul beskjeder');
	 	} else {
	 		$('#togglemessenger').addClass('open').html('Vis beskjeder');
	 	}
	 	return false;
	});
})(jQuery);