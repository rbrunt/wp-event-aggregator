(function( $ ) {
	'use strict';

	jQuery(document).ready(function(){
		jQuery('.xt_datepicker').datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'yy-mm-dd'
		});
	});
	
	jQuery(document).ready(function(){
		jQuery('#eventbrite_import_by').on('change', function(){

			if( jQuery(this).val() == 'event_id' ){
				jQuery('.import_type_wrapper').hide();
				jQuery('.eventbrite_organizer_id').hide();
				jQuery('.eventbrite_organizer_id .wpea_organizer_id').removeAttr( 'required' );
				jQuery('.eventbrite_event_id').show();
				jQuery('.eventbrite_event_id .wpea_eventbrite_id').attr('required', 'required');

			} else if( jQuery(this).val() == 'your_events' ){
				jQuery('.import_type_wrapper').show();
				jQuery('.eventbrite_organizer_id').hide();
				jQuery('.eventbrite_organizer_id .wpea_organizer_id').removeAttr( 'required' );
				jQuery('.eventbrite_event_id').hide();
				jQuery('.eventbrite_event_id .wpea_eventbrite_id').removeAttr( 'required' );

			} else if( jQuery(this).val() == 'organizer_id' ){
				jQuery('.import_type_wrapper').show();
				jQuery('.eventbrite_organizer_id').show();
				jQuery('.eventbrite_organizer_id .wpea_organizer_id').attr('required', 'required');
				jQuery('.eventbrite_event_id').hide();
				jQuery('.eventbrite_event_id .wpea_eventbrite_id').removeAttr( 'required' );
			
			}

		});

		jQuery('#import_type').on('change', function(){
			if( jQuery(this).val() != 'onetime' ){
				jQuery('.hide_frequency .import_frequency').show();
			}else{
				jQuery('.hide_frequency .import_frequency').hide();
			}
		});

		jQuery("#import_type").trigger('change');
		jQuery("#eventbrite_import_by").trigger('change');
	});	


	jQuery(document).ready(function(){
		jQuery('#facebook_import_by').on('change', function(){

			if( jQuery(this).val() == 'facebook_event_id' ){
				jQuery('.import_type_wrapper').hide();

				jQuery('.facebook_page_wrapper').hide();
				jQuery('.facebook_page_wrapper .facebook_page_username').removeAttr( 'required' );

				jQuery('.facebook_eventid_wrapper').show();
				jQuery('.facebook_eventid_wrapper .facebook_event_ids').attr('required', 'required');

			} else {
				jQuery('.import_type_wrapper').show();

				jQuery('.facebook_eventid_wrapper').hide();
				jQuery('.facebook_eventid_wrapper .facebook_event_ids').removeAttr( 'required' );

				jQuery('.facebook_page_wrapper').show();
				jQuery('.facebook_page_wrapper .facebook_page_username').attr('required', 'required');

			}

		});

		jQuery("#facebook_import_by").trigger('change');
	});	


	jQuery(document).ready(function(){
		jQuery('#ical_import_by').on('change', function(){

			if( jQuery(this).val() == 'ical_url' ){
				jQuery('.import_type_wrapper').show();
				jQuery('.ical_url_wrapper').show();
				jQuery('.ical_url_wrapper .ical_url').attr('required', 'required');
				jQuery('.ics_file_wrapper').hide();
				jQuery('.ics_file_wrapper .ics_file_class').removeAttr( 'required' );

			} else if( jQuery(this).val() == 'ics_file' ){
				jQuery('.import_type_wrapper').hide();
				jQuery('.ics_file_wrapper').show();
				jQuery('.ics_file_wrapper .ics_file_class').attr('required', 'required');
				jQuery('.ical_url_wrapper').hide();
				jQuery('.ical_url_wrapper .ical_url').removeAttr( 'required' );

			}

		});

		jQuery("#ical_import_by").trigger('change');
	});	


})( jQuery );


