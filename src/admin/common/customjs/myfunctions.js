 
		
 function load_allPat(){
	 alert("Banu");
	 var dfrom=(document.frm_report.date_from.value);
	 var dto=(document.frm_report.date_to.value);
	 
	  var dataURL = $(this).attr('data-href');
	  
		 $.ajax({
			type: "POST",
			url: '/Home/AjaxEndpoint',
			data: JSON.stringify({ jsonData: "testing" }),// modify
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: successFunc,
			error: errorFunc
			});
	 
 }
 
    $(document).ready(function () {
        
	  $("#b1").on('click',function(){
		 
		   $.ajax({
				 url: '<?php echo base_url() ?>/department/load_view1/', 
				 type: 'POST',
				 data: {view_param: "value"},
				 success: function(response){
					  $('#iframe').html(response);
					 
				 }
		   });
		 
		  
	  });
	  
	   $("#btn_allPat").on('click',function(){
		 alert("asa");
		   $.ajax({
				 url: '<?php echo base_url() ?>/department/load_view1/', 
				 type: 'POST',
				 data: {view_param: "value"},
				 success: function(response){
					  $('#iframe').html(response);
					//alert("response recieved");
				 }
		   });
		 
		  
	  });
	  
	   
    });
 