/* 

Just MILK Design
http://justmilkdesign.com/
@justmilkdesign

 */

(function($){
	
	
	$.localScroll();
	
	$(".reel .nav .left, .reel .nav .right").live("click",function(){
		var speed=1000,
			$this=$(this),
			$carousel=$this.parents(".reel").find(".carousel");
			
			$carousel.stop(true,true);
			
		var	width=$carousel.find(".slide").width(),
			position=$carousel.position().left,
			bound_right=0-($carousel.find(".slide").last().position().left+width);
		
		
		if($this.is(".right")){
			
			if( (position-width)<=(bound_right) ) return;
			
			$carousel.animate({left:"-="+width},speed);
			
		}else{
			
			if( (position+width)>0 ) return;
			
			$carousel.animate({left:"+="+width},speed);
			
		}
		
		
	});
	
})(jQuery);