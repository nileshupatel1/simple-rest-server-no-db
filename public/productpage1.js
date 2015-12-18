$('document').ready(function(e){
  function dispalyitem(e)
  {$.ajax({
          type : "get",
          url : "/products/",
          data : "",
          success : function(data) {
            for(var i=0;i<data.length;i++){
			$("#d1").append('<div><div class="alert alert-info"> \
                <button id='+data[i].id+' type="button" class="btn btn-default pull-right">X</button> \
                <h4 > <strong> ' + data[i].additem + '</strong> <button type="button" class="btn btn-primary pull-right"> $'+ data[i].price+'</button> </h4> \
                <p>'+ data[i].description+'</p>\
                </div></div>');
            }
          } 
        })
	}
    
  dispalyitem(e);
  
  //append data on current page
  
    $("#add").on('click',function(e){
    e.preventDefault();
    var x={
      additem: $("#additem").val(),
      description: $("#description").val(),
      price:$("#price").val(),
      
    };
    console.log(x);
        $.ajax({
            url : "/products",
            type : "post",      
            data : x,
			success : function(result){
			console.log(result);
            var additem1=result.additem;
			var desc1=result.description;
			var price1=result.price;        
			$("#d1").append('<div><div class="alert alert-info"> \
                <button id='+result.id+' type="button" class="btn btn-default pull-right">X</button> \
                <h4 > <strong> ' + additem1 + '</strong> <button type="button" class="btn btn-primary pull-right"> $'+ price1+'</button> </h4> \
                <p>'+ desc1+'</p>\
                </div></div>');
      $("#additem").val("");
      $("#description").val("");
      $("#price").val("");
            }
        });
    });
  
  //delete data
  $("div").on('click','.btn-default',function(e){
    var c=confirm("Are you sure you want to delete the item?");
    if(c === true)
    {
      var deleteitem=$(this).prop('id');
      console.log(deleteitem);
      var deleteitem2=$(this).closest('div.alert');
      console.log(deleteitem2);
      $.ajax({
        url : '/products/'+deleteitem,
        type : "DELETE",
        data : {"id":deleteitem},
        success : function(){
          console.log($(this));
          deleteitem2.remove();       
        }
      });
    }
        
    });
});