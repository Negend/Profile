//winning combos
var score = [,,,,,,,,]
var one = score[0]
var two = score[1]
var three = score[2]
var four = score[3]
var five = score[4]
var six = score[5]
var seven = score[6]
var eight = score[7]
var nine = score[8]

var score = []

var a = one + two +three
var b = one + four+ seven
var c = four + five+ six
var d = seven + eight +nine
var e = one + five + nine
var f = three + five + seven
var g = two +five +eight 
var h = three +six +nine
var buttons = document.getElementsByClassName('turn')
var start = document.getElementsByClassName('start')
var counter = []
//Check for winners. after each turn 
function won (){
	if (a === 3 || b === 3 || c === 3 || d === 3 || e === 3 || f === 3 || g === 3 || h === 3){
		var print = document.getElementsByClassName('winner')
		print[0].innerHTML  = 'Winner!!' 
		clear()

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
		counter.push('1')
		
		var n = counter.length		
		if(n % 2 == 0){
			
			this.value = ('X')
			

		}else{
			this.value = ('O')
			
		}	
		
	})

}

//clear and restart
for(var i = 0; i < 2; i++){
var buttony = start[0]
buttony.addEventListener('click',function(event){
	clear()
	var print = document.getElementsByClassName('winner')
	print[0].innerHTML  = ('Tic Tac Hoe')
})

}



