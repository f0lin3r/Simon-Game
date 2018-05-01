jQuery(document).ready(function($) {
	var j=0,x,speed=1000,count=1,lightID=[],random=[],clicked=[],strict=0;
	//color and sound functions for buttons
	function btn1() {
		$('#audio1')[0].play();
		$('.btn-1').css('background-color', 'lightgreen');
		setTimeout(function(){
		$('.btn-1').css('background-color', 'green');	
		},speed);
	}
	function btn2() {
		$('#audio2')[0].play();
		$('.btn-2').css('background-color', 'pink');
		setTimeout(function(){
		$('.btn-2').css('background-color', 'red');	
		},speed);
	}
	function btn3() {
		$('#audio3')[0].play();
		$('.btn-3').css('background-color', 'lightyellow');
		setTimeout(function(){
		$('.btn-3').css('background-color', 'yellow');	
		},speed);
	}
	function btn4() {
		$('#audio4')[0].play();
		$('.btn-4').css('background-color', 'lightblue');
		setTimeout(function(){
		$('.btn-4').css('background-color', 'blue');	
		},speed);
	}
	//function that performs all the steps
	function doChange(){
		//set signal speed
		if(count <=10){
			speed=800;
		}else{
			speed=400;
		}
		j=0;
		x = setInterval(function() {
		switch(random[j]){
			case 1:
				btn1();
				lightID.push(1);
				break;
			case 2:
				btn2();
				lightID.push(2);
				break;
			case 3:
				btn3();
				lightID.push(3);
				break;
			case 4:
				btn4();
				lightID.push(4);
				break;
		}
		j++;
		if(j >= count){
			clearInterval(x);
		}
	},speed);
	}
	//A function that makes a permanent check about the current state of the game
	function checking() {
		if(lightID.length == clicked.length){
			if(lightID.join() == clicked.join()){
	            if(count == 20){
	                alert("You win!");
	                location.reload();
	            }else{
	            	//add step and go next
	            	setTimeout(function(){
					count++;
	            	$('.count').text(count);
	            	doChange();
	            	clicked=[];
	            	lightID=[];
	            	},1000);
	            }
	   		}else{
	   			//actions with strict error
		        if (strict == 1) {
			        	setTimeout(function(){
						$('.count').text('!!');
						alert('You lose!');
						location.reload();
		            	},1000);
			            
		        }else {
		        	//actions with a non-strict error
		            setTimeout(function(){
					$('.count').text('!!');
	            	doChange();
	            	clicked=[];
	            	lightID=[];
	            	},1000);
	            }
	        }	
		}
	}
	//strict game mode
	 $('.strict').on('click', function () {
        strict=1;
        if($('.strict').css("background-color", "white")){
        	$('.strict').css("background-color", "red");
        }else{
        	$('.strict').css("background-color", "white");
    		strict=0;
        }
    });
	//press start
	$('.start').on('click',function() {
		if($('.start').css("background-color", "white")){
        	$('.start').css("background-color", "red");
        }
		lightID = [];
		clicked = [];
		count = 1;
		$('.count').text(count);
		for (var i=0; i<20; i++) {
    		random[i] = Math.ceil((Math.random() * 4));
   		}
	    doChange();
	});
	//action when you press one of the buttons
	$('.btn-1').on('click',function(event) {
		btn1();
		clicked.push(1);
		checking();
	});
	$('.btn-2').on('click',function(event) {
		btn2();
		clicked.push(2);
		checking();
	});
	$('.btn-3').on('click',function(event) {
		btn3();
		clicked.push(3);
		checking();
	});
	$('.btn-4').on('click',function(event) {
		btn4();
		clicked.push(4);
		checking();
	});
});