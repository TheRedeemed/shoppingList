$(document).ready(function(){
	
	// use enter to add list items
	$('#itemInput').keyup(function(e){
		 var key = e.keyCode
		if(key == 13) {
			//event.preventDefault();
			addItem();
		};
	});	
	
	$('#addItem').click(function(){
		addItem();
	}); 

});

function addItem(){

	var itemDesc = $('#itemInput').val();
	var upd = $('<div class="itemUpdate"></div>');
	var comp = $('<div class="itemComplete"></div>');
	var del = $('<div class="itemDelete"></div><br>');
	var myItem = $('<input id="item" type="text" name="item" value="'+itemDesc+'">').prop('readonly', true);
	var myItemEditable = $('<input id="item" type="text" name="item" value="'+itemDesc+'">').prop('readonly', false);
	var updConfirm = $('<div class="updateValidate"></div>');
	var updCancel = $('<div class="updateCancel"></div>');
	 
	//var myItemEditable = $('<input id="item" type="text" name="item" value="'+itemDesc+'">').prop('disabled', false);
			   //$('<div class="item"></div>').text(itemDesc);
			   //$("input").prop('disabled', true);

		if(itemDesc == ""){
			alert('Please enter an item before you can add it to the list');

		} else {
			$(".shoppingList").append(myItem)
			.append(upd)
			.append(comp)
			.append(del)
			.append(myItemEditable)
			.append(updConfirm)
			.append(updCancel);
			$(myItemEditable).hide();
			$(updConfirm).hide();
			$(updCancel).hide();
			$('#itemInput').val("");
			//$('#itemInput').empty();
		}
		
		$(myItem).dblclick(function(){
		});
		
		$(upd).click(function(){

			var itemVal = $(myItem).val();

			$(myItem).hide();
			$(upd).hide();
			$(comp).hide();
			$(del).hide();
			$(myItemEditable).val(itemVal).show();
			$(updConfirm).show();
			$(updCancel).show();
			
			
			$(updConfirm).click(function(){

				var updatedItemVal = $(myItemEditable).val();

				if(updatedItemVal == ""){
					
					alert('Please enter an item a new or edited value before you can save');

				} else {

					$(myItem).val(updatedItemVal).show();
					$(upd).show();
					$(comp).show();
					$(del).show();
					$(myItemEditable).hide();
					$(updConfirm).hide();
					$(updCancel).hide();					
				}
			});
			
			$(updCancel).click(function(){
				$(myItem).show();
				$(upd).show();
				$(comp).show();
				$(del).show();
				$(myItemEditable).hide();
				$(updConfirm).hide();
				$(updCancel).hide();
			});
			
		});

		$(comp).click(function(){
			$(myItem).toggleClass('markComplete');
		});


		$(del).click(function(){
			$(myItem).remove();
			$(upd).remove();
			$(comp).remove();
			$(del).remove();
		});
}
