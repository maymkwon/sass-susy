'use strict';
module.exports = function(){
var sass = {
		src : 'src/sass/style.scss',
		compassSrc : 'src/sass',
		dest : 'dist/css'
	},
	img = {
		src : 'src/images/*.{gif,jpg,jpeg,png,svg}'
	},
	svg = {
		src : 'src/images/svg/**/*.svg',
		dest : 'dist/images/svg2png'
	}
	return{
		sass : sass,
		img : img,
		svg : svg
	};

};