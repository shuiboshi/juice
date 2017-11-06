//fadeIn and fadeOut
var time ;
var index = 1 ;
var tolnum = 3 ;
$(function(){
<span style="white-space:pre">	</span>setInterval("showBanner("+tolnum+")",3000);
});
function showBanner(n)
{
<span style="white-space:pre">	</span>var ul = $("#banner_img") ;
<span style="white-space:pre">	</span>ul.children().fadeOut("slow") ;
<span style="white-space:pre">	</span>ul.children().eq(index).fadeIn("slow") ;
<span style="white-space:pre">	</span>index = index+1>n-1 ? 0 : index+1 ;
} 