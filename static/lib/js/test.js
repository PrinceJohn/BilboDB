$(document).ready(function() {

	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    };
	});

	$.extend({
	    replaceTag: function (currentElem, newTagObj, keepProps) {
	        var $currentElem = $(currentElem);
	        var i, $newTag = $(newTagObj).clone();
	        if (keepProps) {//{{{
	            newTag = $newTag[0];
	            newTag.className = currentElem.className;
	            $.extend(newTag.classList, currentElem.classList);
	            $.extend(newTag.attributes, currentElem.attributes);
	        }//}}}
	        $currentElem.wrapAll($newTag);
	        $currentElem.contents().unwrap();
	        // return node; (Error spotted by Frank van Luijn)
	        return this; // Suggested by ColeLawrence
	    }
	});

	$.fn.extend({
	    replaceTag: function (newTagObj, keepProps) {
	        // "return" suggested by ColeLawrence
	        return this.each(function() {
	            jQuery.replaceTag(this, newTagObj, keepProps);
	        });
	    }
	});


	// var hej = true;

	$("#menu").on('click', function(event) {
		event.preventDefault();
		$("#innerWrapper").toggleClass('slide');

		// if( hej ) {
		// 	var newWidth = $("#innerWrapper").width() - 320;
		// 	hej = false;
		// }

		// else {
		// 	$("#innerWrapper").css('width', '100%' );
		// 	hej = true;
		// }

		// $("#innerWrapper").css('width', newWidth + 'px' );
	});

	$('.headerMenuIcon').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	// $('#contentWrapper').on('click', function(event) {
	// 	event.preventDefault();
	// 	if( $('#innerWrapper').hasClass('slide') )
	// 		$('#innerWrapper').removeClass('slide');
	// });
	
	// Collapse and expand
	$('.container').on('click', function(event) {
		event.preventDefault();

		var test = $(this).parent().parent();
		console.log( test );
		if( test.hasClass('expanded') ) {
			test.removeClass('expanded');
			test.addClass('colapsed');
			// test.children('.parent').children('.asideList').css('display', 'none');
			test.children('.parent').children('.asideList').hide( 200 );
		} else {
			test.removeClass('colapsed');
			test.addClass('expanded');
			// test.children('.parent').children('.asideList').css('display', 'block');
			test.children('.parent').children('.asideList').show( 200 );
		}
	});

	// Default hide all
	$(".parent").children('.asideList').hide();

	// Activate child (table)
	$('.asideListItem .child').on('click', function(event) {
		event.preventDefault();
		if( $("#tableWrapper").hasClass('hidden') ) {
			$("#tableWrapper").removeClass('hidden');
		}
		if( $(this).hasClass('active') ) {
			var filterValue = "no-filter";
		} else {
			var filterValue = $(this).attr('data-filter');
		}

		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
		$container.isotope({ filter: filterValue });
		// $(this).children('.container').children('.text').children('.listItemChanges').text('');
		// $("#innerWrapper").toggleClass('slide');
	});

	// Mark row
	var numberOfActiveRows = 0;
	$('input[type="checkbox"]').click(function(event) {
		
		// The selected row
		var row = $(this).parent().parent();
		// All rows (used for filtering)
		var $tableRows = $('#tableWrapper').find('tr:not(.tableRowHeader)');
		var rowFilter;

		if( row.hasClass('active') ) {
			numberOfActiveRows--;
			if( numberOfActiveRows < 1 )
				$tableRows.show();
		} else {

			// Fiter only if chain is active
			console.log( $('#chain') );
			if( $('#chain').hasClass('active') ) {
				// If we have marked a row, filter them
				var rowFilter =  ':not(tr[data-row="' + $(this).attr('data-filter') + '"])';
				$tableRows.filter( rowFilter ).hide();
				
			}
			numberOfActiveRows++;
		}

		row.toggleClass('active');

		if( numberOfActiveRows > 0 ) {
			$('#actionBar').addClass('active');
			$('#headerBorder').addClass('active');
			$('#contentWrapper').addClass('morePadding');
			$('#numberOfRows').text( numberOfActiveRows );
		} else {
			$('#actionBar').removeClass('active');
			$('#headerBorder').removeClass('active');
			$('#contentWrapper').removeClass('morePadding');
		}

	});

	// Sort columns
	$('.tableHeadCol').on('click', function(event) {
		if( $(this).hasClass('active') ) {
			$(this).toggleClass('up');
		}

		$(this).addClass('active');
		$(this).siblings().removeClass('active').removeClass('up');
	});

	// Search
	$('#search').on('click', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('active');
	});

	// Find table data by search
	$('#searchInput').keyup(function(event) {
		var input = $('#searchInput').val();
		var $tableRows = $('tbody').find('span');

		if( input == "" ) {
			$tableRows.parent().parent().css('display', 'table-row');
		} else {
			$tableRows.filter( ':not(:contains('+ input + '))' ).parent().parent().css('display', 'none');
			$tableRows.filter( ':contains('+ input + ')' ).parent().parent().css('display', 'table-row');
		}
	});	

	// Find table names by search
	$('#asideSearchInput').keyup( function(event) {
		var input = $('#asideSearchInput').val();
		var $tableRows = $('.child').find('.listItemName');

		console.log( $tableRows.parent().parent() );
		if( input == "" ) {
			$tableRows.parent().parent().show( 200 );
		} else {
			$tableRows.filter( ':not(:contains('+ input + '))' ).parent().parent().css('display', 'none');
			$tableRows.filter( ':contains('+ input + ')' ).parent().parent().css('display', 'block');
		}
	});

	// $('').on('click', function(event) {
	// 	event.preventDefault();

	// });

	// $('.tableData').on('click', function(event) {
	// 	event.preventDefault();
	// 	var text = $(this).text();
	// 	// $(this).replaceTag( '<textarea>', true );
	// 	// console.log('hej');
	// 	$(this).text('');
	// 	$(this).append('<textarea class="edit">' + text + '</textarea>');
	// 	$container.isotope( 'layout' );
	// 	$(this).blur(function(event) {
	// 		$('.edit').parent().text( $('.edit').val() );
	// 		$('.edit').remove();
	// 		$container.isotope( 'layout' );
	// 	});
	// });


	// On blur
	$(".tableData").on('blur',"textarea", function( e ){
	        $(this).closest('span').text( 
	            $(this).val()
	        );
	        resetLayout();
	});

	// Editing table
	$(".defaultTable").on('click','.tableData', function( e ){
	    
	    if ( $(this).find('textarea').length ) {
	         return ;   
	    }    
	    
	    var textarea = $('<textarea class="dataEdit"></textarea>').val( $(this).text() );
	    textarea.bind('resize', function(event) {
	    	resetLayout();
	    });
	                      
	    $(this).empty().append( textarea );
	    textarea.focus();
	    resetLayout();
	    
	});

	// Isotope
	var $container = $('#tableWrapper').isotope({
		layoutMode: 'fitRows'
	});
	// Default hide all
	// $container.isotope({ filter: "no-filter" });

	// Table sorter
	$(".defaultTable").tablesorter( {

	});

	//Table column resizer
	// $("table").colResizable({
	// 	onDrag: resetLayout
	// });

	function resetLayout() {
		$container.isotope( 'layout' );
	}

	$('#dialogClose').on('click', function(event) {
		event.preventDefault();
		$('#dialog').removeClass('visible');
	});	
	$('#addDatabase').on('click', function(event) {
		event.preventDefault();
		$('#dialog').addClass('visible');
	});
	
});
