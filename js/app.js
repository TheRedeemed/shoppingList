$(document).ready(function(){
	
	// use enter to add list items
	$(this).keyup(function(e){
		 var key = e.keyCode
		if(key == 13) {
			event.preventDefault();
			addItem();
		};
	});	

	$('#addItem').click(function(){
		addItem();
	});
});

function addItem(){

	var itemDesc = $('#itemInput').val();
	var chkBox = $('<div class="itemStatus"></div>');
	var upd = $('<div class="itemUpdate"></div>');
	var comp = $('<div class="itemComplete"></div>');
	var del = $('<div class="itemDelete"></div><br>');
	var myItem = $('<div class="item"></div>').text(itemDesc);

		if(itemDesc == ""){
			alert('Please enter an item before you can add it to the list');

		} else {
			$(".shoppingList").append(chkBox)
			.append(myItem)
			.append(upd)
			.append(comp)
			.append(del);
			$('#itemInput').val("");
			$('#itemInput').empty();
		}
}