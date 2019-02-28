$(document).ready(() => {

//-----------------------TABULATION-------------------------------------

	//je vais chercher un array de listes
	var $list = $('div.container ul li')

	//lorsque je clique sur un élément de l'array, je vais chercher son élément voisin div 
	$list.on('click', event => {

	$(event.currentTarget).next('div').toggle()



	})

//-----------------------LE DROPDOWN QUI FAIT PLAISIR-------------------------------------
	var $li = $("<li class='nav-item for-avatar'></li>")
	var $menu = $(".mr-auto")
	var $img = $(".rounded-circle[height='50px']")


	//Création d'un li supplémentaire où je positionne mon image
	var $imageplacement = $li.prependTo($menu)

	// Sélection des 'frères' du li rajouté
	var link = $imageplacement.siblings()

	//On rajoute l'img dans le li
	$img.appendTo($imageplacement)

	//on ajoute les classes bootstrap correspondantes pour que la liste s'aligne en colonne
	$menu.addClass('d-flex')
	$menu.addClass('flex-column')

	//on met l'action au clic sur l'image avatar
	$img.on('click', () => {

		link.toggle()
	})


//----------------------- Modales de connexion/inscription-------------------------------------
	
	$formLogin = $('#form-login')
	$formSubscribe = $('#form-subscribe')
	$linkLogin = link.first()
	$linkSubscribe = $linkLogin.next()


	$formLogin.hide()
	$formSubscribe.hide()

	
	$linkLogin.on('click', event => {
		$formLogin.slideToggle('slow')

		var formSubscribeIsVisible = $formSubscribe.is(':visible')

		if (formSubscribeIsVisible === true) {
			$formSubscribe.hide()
		}

	})

	$linkSubscribe.on('click', event => {

		$formSubscribe.slideToggle('slow')

		var formLoginIsVisible = $formLogin.is(':visible')

		if (formLoginIsVisible === true) {
			$formLogin.hide()
		}
	})


});


