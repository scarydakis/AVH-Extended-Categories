function avhecManualOrderaddloadevent() {
	jQuery("#avhecManualOrder").sortable({
		placeholder : "sortable-placeholder",
		revert : false,
		tolerance : "pointer"
	});
};

addLoadEvent('avhecManualOrderaddloadevent');

function orderCats() {
	jQuery("#updateText").html("Updating Category Order...");
	jQuery("#hdnMyCategoryOrder").val(
			jQuery("#myCategoryOrderList").sortable("toArray"));
}