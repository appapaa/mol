var w,h,ctx;
$( document ).ready(function() {
	var example = $('canvas')[0];
	ctx = example.getContext('2d');
	ctx.fillStyle = 'white';
	w =  $('canvas').width();
	h =  $('canvas').height();
	mol();
	rend();
});
var kr = {y:0,V:1,k:10};
function mol(){
	getmol({i:50,j:500,l:5000});
	console.log(elem_arr);
}
var elem_arr = [];
var t = 1;
function getmol(arr){
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
function bum(i){
	var el = elem_arr[i];
	kr.V = (2*el.V + (kr.k - 1)*kr.V)/(kr.k + 1);
	el.V = (2*kr.V - (kr.k - 1)*el.V)/(kr.k + 1);
}
function move(){
	for(var i = 0; i<elem_arr.i; i++){
		elem_arr[i].y += elem_arr[i].V*t;
	}
}
function rend(){
	ctx.fillRect(0, 0, w, h);
}