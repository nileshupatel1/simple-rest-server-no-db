$(document).ready(function(e){
	function dispalyitem(e)
	 {
		//get data from server
		$.ajax({
		url:"/products",
		method:"GET",
		success:function(data){  
		console.log(data);
			var choose = $("#output").html();
			var template = Handlebars.compile(choose); 
			var temp = template(data);
			$("#done").append(temp);
		}
	});

	};
	dispalyitem(e);

// for adding data (button click event)

	$("#add").on("click",function(e){

		var item_name = $("#additem").val();
		var description = $("#desc").val();
		var Price = $("#price").val();

		$.ajax({
			url:"/products",
			method:"POST",
			data:{item_name, description, Price},
			success:function(data){
				console.log(data);
				var ourItem_name = $("#additem").val("");
				var ourDescription = $("#desc").val("")
				var ourPrice = $("#price").val("");
				var choose = $("#output").html();
				var template = Handlebars.compile(choose); 
				var temp = template([data]);
				$("#done").append(temp);
			}
		});
		e.preventDefault();
	});
$("#done").on('click','.glyphicon',function(e){
		var cnfrm = confirm("Are you sure you want to delete it??");
		if(cnfrm === true)
		{
			var del_item = $(this).prop("id");
			
			var del_item1 = $(this).closest(".well");
			
		$.ajax({
				
			url : '/products/'+del_item,
			type : "DELETE",
			data : {"id":del_item},
			success : function(){
				console.log($(this));
				del_item1.remove();				
			}
			});
		}
        
    });

});