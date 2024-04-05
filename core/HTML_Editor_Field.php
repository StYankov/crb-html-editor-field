<?php

namespace Carbon_Field_HTML_Editor;

use Carbon_Fields\Field\Field;

class HTML_Editor_Field extends Field {
    /**
	 * Enqueue scripts and styles in admin.
	 * Called once per field type.
	 *
	 * @static
	 * @access public
	 *
	 * @return void
	 */
	public static function admin_enqueue_scripts() {
        $root_uri = Plugin::get_plugin_url();
        
		wp_enqueue_style( 'crb-html-editor', $root_uri . '/build/bundle.css' );
		wp_enqueue_script( 'crb-html-editor', $root_uri . '/build/bundle.js', [ 'carbon-fields-core' ] );
	}
}