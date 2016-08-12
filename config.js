'use strict';
module.exports = function(){
var sass = {
		src : 'src/sass/style.scss',
		compassSrc : 'src/sass',
		dest : 'dist/css'
	},
	img = {
		src : 'src/images/*.{gif,jpg,jpeg,png,svg}'
	}
	return{
		sass : sass,
		img : img
	};

};