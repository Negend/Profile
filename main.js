//winning combos



var buttons = document.getElementsByClassName('turn')
var start = document.getElementsByClassName('start')
var print = document.getElementsByClassName('winner')
var score = [,,,,,,,,]
var counter = []


//Check for winners. after each turn 
function won (){
		 score = buttons
		 one = score[0].value
		 two = score[1].value
		 three = score[2].value
		 four = score[3].value
		 five = score[4].value
		 six = score[5].value
		 seven = score[6].value
		 eight = score[7].value
		 nine = score[8].value
		var a = one + two + three 
		var b = one + four +seven
		var c = four + five + six
		var d = seven + eight +nine
		var e = one + five + nine
		var f = three +five + seven
		var g = two +five +eight 
		var h = three +six +nine
	if (  a === 'OOO'|| b === 'OOO' || c === 'OOO'|| d === 'OOO' || e === 'OOO' || f === 'OOO' || g === 'OOO' || h === 'OOO'){
		print[0].innerHTML  = 'OOO Winner!!' 
		
	}else if(  a === 'XXX'|| b === 'XXX' || c === 'XXX' || d === 'XXX' || e === 'XXX' || f === 'XXX' || g === 'XXX' || h === 'XXX'){
		print[0].innerHTML  = 'XXX Winner!!' 
		

	}
	
}
//clear to restart
function clear (){
	for(var i = 0; i < 9; i++){
		buttons[i].value = ('')
	}
	counter = []
	score = [,,,,,,,,]
}


// counter x or o?
var buttons = document.getElementsByClassName('turn')
for(var i = 0; i < 9; i++){
	
	var button = buttons[i]
	

	button.addEventListener('click',function(event){
		if( print[0].innerHTML != 'XXX Winner!!' && print[0].innerHTML != 'OOO Winner!!' ){	
			if(this.value != 'O' && this.value != 'X'){
				counter.push('1')
				
				 n = counter.length		
				if(n % 2 == 0){
					print[0].innerHTML = ('OOOs turn')
					this.value = ('X')
					score[n-1] =('X')
					won()
				}else{
					print[0].innerHTML = ('XXXs turn')
					this.value = ('O')
					score[n-1] = ('O')
					won()
					
				}	
			}
						
		}
		if( print[0].innerHTML != 'XXX Winner!!' && print[0].innerHTML != 'OOO Winner!!' ){
			if(n==9) {
				print[0].innerHTML = ('Draw')
			}
		}	
	})

}

//clear and restart
for(var i = 0; i < 2; i++){
var buttony = start[0]
buttony.addEventListener('click',function(event){
	clear()	
	print[0].innerHTML  = ('Tic Tac Toe')
})

}



