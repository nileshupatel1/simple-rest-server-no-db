
	function abc(x){
				console.log(x.value);
					var y =	x.nextSibling.innerHTML;
					//console.log(y);
					//console.log(x.value);
						if(x.checked){
						var my = document.createElement("li");
							var text = document.createTextNode(y);
							my.appendChild(text);
							document.getElementById("xyz").appendChild(my)
						
						}else{
							var para = document.getElementsByTagName("li");
							for(i = 0; i < para.length;i++){
								if(y == para[i].innerHTML){
									document.getElementById("xyz").removeChild(para[i]);
								}
							}
						}
					}
		
		