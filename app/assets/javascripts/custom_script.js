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
	
	//je sélectionne les liens Login et subscribe dans la navbar et les form 
	$formLogin = $('#form-login')
	$formSubscribe = $('#form-subscribe')
	$linkLogin = link.first()
	$linkSubscribe = $linkLogin.next()

	//sélectionne toute la navbar sauf l'ul 
	$excludeFormLogin = $('.navbar-expand-lg').not($menu)
	console.log($excludeFormLogin)

	//par défaut je cache les deux forms
	$formLogin.hide()
	$formSubscribe.hide()

	//au clic sur le lien du login j'affiche le form correspondant et je cache l'autre form si besoin
	$linkLogin.on('click', event => {
		$formLogin.slideDown('slow')

		var formSubscribeIsVisible = $formSubscribe.is(':visible')

		if (formSubscribeIsVisible === true) {
			$formSubscribe.hide()
		}

	})

	//fait en sorte que lorsqu'on clique sur la navbar le form se cache (ne marche pas bien)
	/*
	$excludeFormLogin.on('click', event => {
		$formLogin.hide()
		console.log('je clique pour fermer le form')
	})
	*/


	//pareil que pour login
	$linkSubscribe.on('click', event => {

		$formSubscribe.slideToggle('slow')

		var formLoginIsVisible = $formLogin.is(':visible')

		if (formLoginIsVisible === true) {
			$formLogin.hide()
		}
	})


//----------------------- NAVBAR RESPONSIVE-------------------------------------

//ne marche absolument pas => à voir si resize est mieux
// https://stackoverflow.com/questions/9828831/jquery-on-window-resize
if( $(window).width() < 800 ) {

	console.log("le breakpoint marche")
	$('')

	
}



});

