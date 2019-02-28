$(document).ready(() => {

	var $li = $("<li class='nav-item for-avatar'></li>")
	var $menu = $(".mr-auto")
	var $img = $(".rounded-circle[height='50px']")


	//Création d'un li supplémentaire où je positionne mon image

	var $imageplacement = $li.prependTo($menu)
	var link = $imageplacement.siblings()
	console.log(link)

	$img.appendTo($imageplacement)

	$menu.addClass('d-flex')
	$menu.addClass('flex-column')


	$img.on('click', () => {

		link.toggle()
	})

});