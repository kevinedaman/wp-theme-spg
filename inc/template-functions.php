<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package spg
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function spg_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! isspgingular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'spg_body_classes' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function spg_pingback_header() {
	if ( isspgingular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'spg_pingback_header' );