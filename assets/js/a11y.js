/**
 * Add the tab button to each tab section
 */
var tabs = document.querySelector( '.js-tabbing' );

/**
 * Toggle the tabs on the button click
 */
var interval = 0;
AddEvent( document.querySelector( '.js-tabbing-switch' ), 'click', function( event, $this ) {
	var _isOn = HasClass( $this, 'is-on' );

	if( _isOn === null ) {
		AddClass( $this, 'is-on' );
		$this.innerText = 'Stop tabbing';
		interval = Tab();
	}
	else {
		StopTab( interval, $this );
	}
});


/**
 * Event listener for when the user scrolls or uses the tab key to stop Tab() function
 */
AddEvent( document.querySelector( '.tabbing-frame' ), 'keydown', function( event, $this ) {
	if( HasClass(document.querySelector( '.js-tabbing-switch' ), 'is-on' ) ) {
		StopTab( interval, document.querySelector( '.js-tabbing-switch' ) );
	}
});


/**
 * Move the tab through each element with the .js-focus-me class
 */
function Tab() {
	var items = document.querySelectorAll( '.js-focus-me' );
	var loop = 0;

	return setInterval( function() {
		if( loop >= items.length ) {
			StopTab( interval, document.querySelector( '.js-tabbing-switch' ) );
		}
		else {
			items[ loop ].focus();
		}

		loop ++;
	}, 500 );
}


/**
 * Stop the Tab() function
 */
function StopTab( interval, $this ) {
	RemoveClass( $this, 'is-on' );
	$this.innerText = 'Show tabbing';
	clearInterval( interval );
	$this.focus();
}

var filters = document.querySelector( '.js-filter' );

AddEvent( document.querySelectorAll( '.js-filter-btn' ), 'click', function( event, $this ) {
	var newFilter = 'js-filter--' + $this.getAttribute( 'data-filter' );

	var allButtons = document.querySelectorAll( '.js-filter-btn' );
	for( var i = 0; i < allButtons.length; i++ ) {
		var oldFilter = 'js-filter--' + allButtons[ i ].getAttribute( 'data-filter' );
		RemoveClass( filters, oldFilter );
		RemoveClass( allButtons[ i ], 'is-active' );
	}

	AddClass( filters, newFilter );
	AddClass( $this, 'is-active' );
});
