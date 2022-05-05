function getState(val) {
	$.ajax({
		type: "POST",
		url: "./ajax/get-state-ep.php",
		data:'country_id='+val,
		beforeSend: function() {
			$("#state-list").addClass("loader");
		},
		success: function(data){
			$("#state-list").html(data);
			$('#city-list').find('option[value]').remove();
			$("#state-list").removeClass("loader");
		}
	});
}

function getCity(val) {
	$.ajax({
		type: "POST",
		url: "./ajax/get-city-ep.php",
		data:'state_id='+val,
		beforeSend: function() {
			$("#city-list").addClass("loader");
		},
		success: function(data){
			$("#city-list").html(data);
			$("#city-list").removeClass("loader");
		}
	});
}