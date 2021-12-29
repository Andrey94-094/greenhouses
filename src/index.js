/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "animate.css"
import "font-awesome/scss/font-awesome.scss"

/*
 * Internal dependencies
 */
import "./styles/style.scss"
import slider from "./components/slider"
import calc from "./components/calc"

document.addEventListener('DOMContentLoaded', () => {
    slider();
    calc();
})