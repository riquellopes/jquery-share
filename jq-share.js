;(function($, win){
	var url='https://www.facebook.com/sharer/sharer.php?u=%URL';
	
	$.fn.jqShare=function(){
		var self = this,
			url_share=url.replace('%URL', win.location.href);
			$(self).html('<a href="'+url_share+'" id="jq-share-'+self.id+'">share - '+win.location.href+'</a>');
	}
})(jQuery, window);