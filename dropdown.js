$.widget("custom.iconselectmenu", $.ui.selectmenu, {
	_renderItem: function(ul, item) {
		var li = $("<li>").attr('onClick','selIdio('+item.value+');'), wrapper = $("<div>", {text: item.label});
		$("<span>", {
			style: item.element.attr("data-style"), "class": "ui-icon " + item.element.attr("data-class")
		}).appendTo(wrapper);
		return li.append(wrapper).appendTo(ul);
	}
});
$("#changeIdio").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons");

function selIdio(id){
	// function to change the language of the web via ajax, i. e.
}
