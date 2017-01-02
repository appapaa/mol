$( document ).ready(function() {
	mol();
});

var mol = function(){
	
}
var elem_arr = [];
var getmol = function(arr){
	//i
	//j
	//R
	//dl
	for(var i = 0; i<arr.i; i++){
		for(var j = 0; j<arr.j; j++){
			elem_arr.push({
				x: i,
				y: j*arr.dl,
				R: arr.R,
				V: Math.random()-0.5;
			});
		}
	}	
}