<?php
/**
 * Plugin Name: DBW Partner Slider Block
 * Description: Ein Gutenberg-Block für einen Infinity-Partner-Slider mit anpassbarer Geschwindigkeit, Abstand, Hover-Stop und optionalen Logo-Links, entwickelt von dbw media.
 * Version: 1.0.0
 * Author: dbw media
 * Text Domain: dbw-partner-slider-block
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function dbw_register_partner_slider_block() {
    $dir = plugin_dir_path( __FILE__ );

    wp_register_script(
        'dbw-partner-slider-block-script',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ],
        filemtime( $dir . 'build/index.js' )
    );

    wp_register_style(
        'dbw-partner-slider-block-editor-style',
        plugins_url( 'build/index.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( $dir . 'build/index.css' )
    );

    wp_register_style(
        'dbw-partner-slider-block-style',
        plugins_url( 'build/style-index.css', __FILE__ ),
        [],
        filemtime( $dir . 'build/style-index.css' )
    );

    register_block_type( 'dbw-partner-slider-block/slider', [
        'editor_script' => 'dbw-partner-slider-block-script',
        'editor_style'  => 'dbw-partner-slider-block-editor-style',
        'style'         => 'dbw-partner-slider-block-style',
    ] );
}
add_action( 'init', 'dbw_register_partner_slider_block' );
