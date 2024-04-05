<?php

namespace Carbon_Field_HTML_Editor;

use Carbon_Fields\Carbon_Fields;

class Plugin {
    public function __construct() {        
        add_action( 'after_setup_theme', [ $this, 'register_field' ] );
    }

    public function register_field() {
        if( ! class_exists( 'Carbon_Fields\Carbon_Fields' ) ) {
            return;
        }

        Carbon_Fields::extend( HTML_Editor_Field::class, function( $container ) {
            return new HTML_Editor_Field(
                $container['arguments']['type'],
                $container['arguments']['name'],
                $container['arguments']['label']
            );
        } );
    }

    public static function get_plugin_url() {
        return plugin_dir_url( dirname( __FILE__ ) );
    }
}