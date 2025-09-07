<?php
/**
 * Plugin Name: Logo Slider Block
 * Plugin URI: https://wordpress.org/plugins/logo-slider-block/
 * Description: A professional infinity logo slider Gutenberg block with customizable speed, spacing, hover-stop and optional links. Perfect for showcasing partner, client or sponsor logos.
 * Version: 1.0.0
 * Requires at least: 5.8
 * Requires PHP: 7.2
 * Author: dbw media
 * Author URI: https://dbw-media.de
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: logo-slider-block
 * Domain Path: /languages
 * 
 * @package logo-slider-block
 */

// Security: Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define plugin constants
define( 'LOGO_SLIDER_BLOCK_VERSION', '1.0.0' );
define( 'LOGO_SLIDER_BLOCK_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'LOGO_SLIDER_BLOCK_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'LOGO_SLIDER_BLOCK_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

/**
 * Register the Gutenberg Block
 */
function logo_slider_block_register() {
    // Check if Gutenberg is available
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // Register block scripts
    $script_asset_path = LOGO_SLIDER_BLOCK_PLUGIN_DIR . 'build/index.asset.php';
    $script_asset = file_exists( $script_asset_path )
        ? require( $script_asset_path )
        : array(
            'dependencies' => array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ),
            'version' => LOGO_SLIDER_BLOCK_VERSION,
        );

    wp_register_script(
        'logo-slider-block-editor',
        LOGO_SLIDER_BLOCK_PLUGIN_URL . 'build/index.js',
        $script_asset['dependencies'],
        $script_asset['version'],
        false
    );

    // Register editor styles
    wp_register_style(
        'logo-slider-block-editor-style',
        LOGO_SLIDER_BLOCK_PLUGIN_URL . 'build/index.css',
        array( 'wp-edit-blocks' ),
        filemtime( LOGO_SLIDER_BLOCK_PLUGIN_DIR . 'build/index.css' )
    );

    // Register frontend styles
    wp_register_style(
        'logo-slider-block-style',
        LOGO_SLIDER_BLOCK_PLUGIN_URL . 'build/style-index.css',
        array(),
        filemtime( LOGO_SLIDER_BLOCK_PLUGIN_DIR . 'build/style-index.css' )
    );
    
    // Register frontend script for perfect infinity loop
    $frontend_script = LOGO_SLIDER_BLOCK_PLUGIN_DIR . 'src/frontend.js';
    if ( file_exists( $frontend_script ) ) {
        wp_register_script(
            'logo-slider-block-frontend',
            LOGO_SLIDER_BLOCK_PLUGIN_URL . 'src/frontend.js',
            array(),
            filemtime( $frontend_script ),
            true
        );
    }

    // Register the block
    register_block_type( 'logo-slider-block/slider', array(
        'editor_script' => 'logo-slider-block-editor',
        'editor_style'  => 'logo-slider-block-editor-style',
        'style'         => 'logo-slider-block-style',
        'script'        => 'logo-slider-block-frontend',
        'attributes' => array(
            'images' => array(
                'type' => 'array',
                'default' => array(),
            ),
            'speed' => array(
                'type' => 'string',
                'default' => 'medium',
            ),
            'gap' => array(
                'type' => 'string',
                'default' => 'medium',
            ),
            'marginSize' => array(
                'type' => 'string',
                'default' => 'medium',
            ),
            'logoHeight' => array(
                'type' => 'string',
                'default' => '50',
            ),
            'overlayEnabled' => array(
                'type' => 'boolean',
                'default' => true,
            ),
            'overlayColor' => array(
                'type' => 'string',
                'default' => '#ffffff',
            ),
            'blackLogos' => array(
                'type' => 'boolean',
                'default' => false,
            ),
        ),
    ) );

    // Set script translations
    wp_set_script_translations( 
        'logo-slider-block-editor', 
        'logo-slider-block',
        LOGO_SLIDER_BLOCK_PLUGIN_DIR . 'languages'
    );
}
add_action( 'init', 'logo_slider_block_register' );

/**
 * Load text domain for translations
 */
function logo_slider_block_load_textdomain() {
    load_plugin_textdomain( 
        'logo-slider-block', 
        false, 
        dirname( LOGO_SLIDER_BLOCK_PLUGIN_BASENAME ) . '/languages' 
    );
}
add_action( 'plugins_loaded', 'logo_slider_block_load_textdomain' );

/**
 * Plugin action links
 */
function logo_slider_block_plugin_links( $links ) {
    $plugin_links = array(
        '<a href="' . esc_url( 'https://wordpress.org/support/plugin/logo-slider-block/' ) . '">' . 
            esc_html__( 'Support', 'logo-slider-block' ) . '</a>',
        '<a href="' . esc_url( 'https://wordpress.org/plugins/logo-slider-block/#description' ) . '">' . 
            esc_html__( 'Documentation', 'logo-slider-block' ) . '</a>',
    );
    
    return array_merge( $links, $plugin_links );
}
add_filter( 'plugin_action_links_' . LOGO_SLIDER_BLOCK_PLUGIN_BASENAME, 'logo_slider_block_plugin_links' );

/**
 * Plugin meta links
 */
function logo_slider_block_plugin_meta( $links, $file ) {
    if ( LOGO_SLIDER_BLOCK_PLUGIN_BASENAME === $file ) {
        $row_meta = array(
            'agency' => '<a href="' . esc_url( 'https://dbw-media.de' ) . '" style="font-weight: bold; color: #0073aa;">' . 
                esc_html__( 'WordPress Agentur', 'logo-slider-block' ) . '</a>',
        );
        
        return array_merge( $links, $row_meta );
    }
    
    return $links;
}
add_filter( 'plugin_row_meta', 'logo_slider_block_plugin_meta', 10, 2 );

/**
 * Admin notice for Gutenberg requirement
 */
function logo_slider_block_admin_notice() {
    if ( ! function_exists( 'register_block_type' ) ) {
        ?>
        <div class="notice notice-error">
            <p><?php 
                printf(
                    __( 'The <strong>Logo Slider Block</strong> plugin requires WordPress 5.8 or higher. You are using WordPress %s.', 'logo-slider-block' ),
                    get_bloginfo( 'version' )
                );
            ?></p>
        </div>
        <?php
    }
}
add_action( 'admin_notices', 'logo_slider_block_admin_notice' );

/**
 * Activation hook
 */
function logo_slider_block_activate() {
    if ( version_compare( get_bloginfo( 'version' ), '5.8', '<' ) ) {
        deactivate_plugins( LOGO_SLIDER_BLOCK_PLUGIN_BASENAME );
        wp_die( 
            esc_html__( 'This plugin requires WordPress 5.8 or higher.', 'logo-slider-block' ),
            esc_html__( 'Plugin activation failed', 'logo-slider-block' ),
            array( 'back_link' => true )
        );
    }
}
register_activation_hook( __FILE__, 'logo_slider_block_activate' );

/**
 * Deactivation hook
 */
function logo_slider_block_deactivate() {
    // Cleanup if needed
}
register_deactivation_hook( __FILE__, 'logo_slider_block_deactivate' );