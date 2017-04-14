  $( document ).ready( function() {
        var fixedGnb = $( '.gnb' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > fixedGnb.top ) {
            $( '.gnb' ).addClass( 'gnb_fixed' );
          }
          else {
            $( '.gnb' ).removeClass( 'gnb_fixed' );
          }
        });
  } );