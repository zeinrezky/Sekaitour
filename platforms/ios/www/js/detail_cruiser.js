currentPage = {};
currentPage.init = function() {
	console.log("detailFlight :: init");

};

		formData = {
		id: sessionStorage.id
	}
		$.ajax({
		type: "get",
		url: "http://crocodic.net/sekaiapps/api/get_detail_cruiser.php",
		data: formData,
		dataType: "json",
		success: function(data) {
			
			
			
			$('#info')
          .append('<img class="img-logo" style="padding:0px; margin-top:-2px;" src="http://crocodic.net/sekaiapps/admin/tmp/'+data.promo[0].image +'"/>')
            .append('<div class="wrap-title"><h3>'+data.promo[0].title+'')
            .append('<li style="border-bottom: none;"><div class="wrap-content"> <div class="des_page"><i class="widget fa fa-map-marker"></i><span id="widget">Destination :</span>'+data.promo[0].destination+'</div> <div class="des_page"><i class="widget fa fa-clock-o"></i><span id="widget">Duration :</span>'+data.promo[0].duration+' days</div> <div class="des_page"><i class="widget fa fa-calendar"></i><span id="widget">Departs :</span>'+data.promo[0].depart+'</div> <div class="des_page"><i class="widget fa fa-calendar"></i><span id="widget">Arrives :</span>'+data.promo[0].arrive+'</div> <div class="des_page"><i class="widget fa fa-usd"></i><span id="widget" style="margin-left:13px;">Price : </span> $'+data.promo[0].price+'</div> <div class="about"><p style="text-align:justify; text-indent:20px;">'+data.promo[0].deskripsi+'');

		},
		error: function() {
			alert("Detail task failure");
		}
	});

