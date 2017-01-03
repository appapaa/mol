$( document ).ready(function() {
	var example = $('canvas')[0],
	ctx = example.getContext('2d');
	w =  $('canvas').width();
	h =  $('canvas').height();
	mol();
});
var w,h;
var kr = {y:0,V:1,k:10};
var mol = function(){
	getmol({i:50,j:500,l:5000});
	console.log(elem_arr);
}
var elem_arr = [];
var t = 1;
var getmol = function(arr){
	//i
	//j
	//l
	for(var i = 0; i<arr.i; i++){
		for(var j = 0; j<arr.j; j++){
			elem_arr.push({
				y: Math.random()*arr.l,
				V: Math.random()-0.5
			});
		}
	}
}
var bum = function(i){
	var el = elem_arr[i];
	kr.V = (2*el.V + (kr.k - 1)*kr.V)/(kr.k + 1);
	el.V = (2*kr.V - (kr.k - 1)*el.V)/(kr.k + 1);
}
var move = function(){
	for(var i = 0; i<elem_arr.i; i++){
		elem_arr[i].y += elem_arr[i].V*t;
	}
}
var rend = function(){
	ctx.fillRect(0, 0, w, h)
}