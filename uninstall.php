<?php
/**
 * Uninstall Script for Logo Slider Block
 * 
 * Executed when the plugin is uninstalled via WordPress Admin.
 * 
 * @package logo-slider-block
 * @since 1.0.0
 */

// Security: Only execute when called by WordPress
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

// Currently no database entries or options to delete
// The block stores its data directly in post content

// If options are added in the future, delete them here:
// delete_option( 'logo_slider_block_settings' );

// If transients are used:
// delete_transient( 'logo_slider_block_cache' );