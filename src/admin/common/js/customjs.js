
<script type="text/javascript">
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
		 alert("as");
		   $.ajax({
				 url: '<?php echo base_url() ?>/department/load_view1/', 
				 type: 'POST',
				 data: {view_param: "value"},
				 success: function(response){
					  $('#iframe').html(response);
					alert("response recieved");
				 }
		   });
		 
		  
	  });
	  
	   
    });
</script>