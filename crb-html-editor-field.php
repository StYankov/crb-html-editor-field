<?php
/**
 * Plugin Name: Carbon Fields HTML Editor Field
 * Plugin URI: https://stoilyankov.com
 * Description: Add a custom HTML Editor carbon field
 * Version: 1.0
 * Author: Stoil Yankov
 * Author https://stoilyankov.com
 * License: GPL v2 or later
 * Text Domain: crb-html-editor-field
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

new Carbon_Field_HTML_Editor\Plugin();