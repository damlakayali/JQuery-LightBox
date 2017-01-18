//JS Dosyası

var crrPhoto;

$(document).ready(function(){
	
	$('.galleryImg').click(openLB);
	$('.previous').click(prevPhoto);
	$('.next').click(nextPhoto);
	$('.exit').click(closeLB);
});
		

function openLB(){
		crrPhoto=$.inArray(this,$('.galleryImg'));
		var src=$(this).attr("src");
		$('.lbImage').attr("src",src);
		$('.screen').addClass("visible");
		$('.galleryImg').hide();
	
}

function prevPhoto(){
	var prevImg=crrPhoto-1;
	if(prevImg < 0)
	{
		prevImg=$('.galleryImg').length-1;
	}

	$('.lbImage').attr("src",$('.galleryImg:eq('+prevImg+')').attr("src"));
	crrPhoto=prevImg;
}

function nextPhoto()
{
	var nextImg=crrPhoto+1;
	if(nextImg==$('.galleryImg').length)
	{
		nextImg=0;
	}
	$('.lbImage').attr("src",$('.galleryImg:eq('+nextImg+')').attr("src"));
	crrPhoto=nextImg;
}

function closeLB()
{
	$('.galleryImg').show();
	$('.screen').removeClass("visible");

}


