window.addEventListener("load",function() {


var Q = window.Q = Quintus({development:true})
        .include("Sprites, Scenes, Audio, Input, 2D, Anim, Touch, UI")
        .setup({width:600,height:800,scaleToFit:true})
        .touch()
        .enableSound();
Q.UI.Button.extend("Choice",{
	init:function(p){
		this._super(p,{
			x:0,
			y:0,
			label:'',
			color:'red',
			font:"100 20px arial",
			fontColor:'black'
		});
	},

});
var widthQ = Q.width/2;
var heightQ = Q.height/2;
var op ='';
var operation;
var level = '';
var cnt = 0;
Q.scene('main',function(stage){
	Q.audio.stop();
	 Q.audio.play('bgmusic.mp3',{loop:true});
	 addSprite(stage,widthQ,heightQ,'mdas.png');
	 addButton(stage,295,505,'playbtn.png',function(){
	 	// Q.audio.stop('bgmusic.mp3');
	 	Q.audio.play('click.mp3');
		Q.load('stagebg.png,beginnerbtn.png,advancebtn.png,geniusbtn.png',function(){
			Q.stageScene('stages');
		});
	 });
	 addButton(stage,300,605,'tutorialsbtn.png',function(){
	 	Q.audio.stop('bgmusic.mp3');
	 	Q.audio.play('click.mp3');
		Q.load('tutorials/subtractbg.png,tutorials/5cake.png,tutorials/5xcake.png,tutorials/addbg.png,tutorials/1cake.png,tutorials/2cake.png,tutorials/squares.png,tutorials/multiplybg.png,tutorials/divisionbg.png,tutorials/3cake.png,tutorials/1rcake.png,addition.mp3,subtraction.mp3,multiplication.mp3,division.mp3',function(){
			Q.stageScene('addtutorial');
		});
	 });
});

Q.scene('stages',function(stage){
	cnt = 0;
	addSprite(stage,widthQ,heightQ,'stagebg.png');
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
	addButton(stage,305,450,'beginnerbtn.png',function(){
		Q.audio.stop();
		Q.audio.play('click.mp3');
		Q.load('backbtn.png,quiz/addbg.png,quiz/subtractbg.png,cupcake/box1.png,cupcake/box2.png,cupcake/box3.png,cupcake/box4.png,cupcake/box5.png,cupcake/box6.png,cupcake/box7.png,cupcake/box8.png,cupcake/box9.png,tutorials/squares.png',function(){
			Q.stageScene('beginner');
		});
	});
	addButton(stage,305,530,'advancebtn.png',function(){
		Q.audio.stop();
		Q.audio.play('click.mp3');
		Q.load('backbtn.png,quiz/addbg.png,quiz/subtractbg.png,cupcake/box1.png,cupcake/box2.png,cupcake/box3.png,cupcake/box4.png,cupcake/box5.png,cupcake/box6.png,cupcake/box7.png,cupcake/box8.png,cupcake/box9.png,tutorials/squares.png',function(){
			Q.stageScene('beginner');
		});
	});
	addButton(stage,305,610,'geniusbtn.png',function(){});
});

Q.scene('beginner',function(stage){
	level = 'beginner';	
	cnt++;
	if(cnt<6){
		operation = getOperation(level);
		console.log(operation);
		if(operation == 0)
			addSprite(stage,widthQ,heightQ,'quiz/addbg.png');
		else
			addSprite(stage,widthQ,heightQ,'quiz/subtractbg.png');
		addButton(stage,60,70,'backbtn.png',function(){
			Q.stageScene('main');
		});
		generateGiven(stage,operation);
	}else{
		Q.stageScene('main');
	}
	
});
Q.scene('addtutorial',function(stage){
	op = 'add';
	var first,second;
	Q.audio.play('addition.mp3');
	addSprite(stage,widthQ,heightQ,'tutorials/addbg.png');
	first = new Q.UI.Button({
		asset:'tutorials/1cake.png',
		x:180,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,2,3,4,5,op);
				// countDown();
			}
		}
	});
	second = new Q.UI.Button({
		asset:'tutorials/2cake.png',
		x:420,
		y:380,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || first.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && first.p.opacity == 1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,2,3,4,5,op);
				// countDown();
			}
		}	
	});
	stage.insert(first);
	stage.insert(second);
	
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
});

Q.scene('subtracttutorial',function(stage){
	op = 'subtract';
	Q.audio.stop();
	Q.audio.play('subtraction.mp3');
	addSprite(stage,widthQ,heightQ,'tutorials/subtractbg.png');
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
	var fivecake = new Q.UI.Button({
		asset:'tutorials/5cake.png',
		x:305,
		y:380
	},function(){
		this.p.asset = 'tutorials/5xcake.png';
		addSprite(stage,305,670,'tutorials/squares.png');
		generateChoices(stage,2,3,4,5,op);
	});
	stage.insert(fivecake);
});

Q.scene('multiplytutorial',function(stage){
	op = 'multiply';
	Q.audio.stop();
	Q.audio.play('multiplication.mp3');
	addSprite(stage,widthQ,heightQ,'tutorials/multiplybg.png');
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
	var first,second,third;
	first =  new Q.UI.Button({
		asset:'tutorials/2cake.png',
		x:140,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,8,6,4,9,op);
				// countDown();
			}
		}
	});
	second =  new Q.UI.Button({
		asset:'tutorials/2cake.png',
		x:297,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,8,6,4,9,op);
				// countDown();
			}
		}
	});
	third =  new Q.UI.Button({
		asset:'tutorials/2cake.png',
		x:455,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,8,6,4,9,op);
				// countDown();
			}
		}
	});
	stage.insert(first);
	stage.insert(second);
	stage.insert(third);
});

Q.scene('divisiontutorial',function(stage){
	op = 'division';
	Q.audio.stop();
	Q.audio.play('division.mp3');
	addSprite(stage,widthQ,heightQ,'tutorials/divisionbg.png');
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
	var first,second,third,fourth;
	first =  new Q.UI.Button({
		asset:'tutorials/3cake.png',
		x:90,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0 || fourth.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1 && fourth.p.opacity ==1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,4,3.1,1.9,2,op);
				// countDown();
			}
		}
	});
	second =  new Q.UI.Button({
		asset:'tutorials/3cake.png',
		x:230,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0 || fourth.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1 && fourth.p.opacity ==1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,4,3.1,1.9,2,op);
				// countDown();
			}
		}
	});
	third =  new Q.UI.Button({
		asset:'tutorials/3cake.png',
		x:367,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0 || fourth.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1 && fourth.p.opacity ==1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,4,3.1,1.9,2,op);
				// countDown();
			}
		}
	});
	fourth =  new Q.UI.Button({
		asset:'tutorials/1rcake.png',
		x:525,
		y:370,
		opacity:0
	},function(){
		if(this.p.opacity == 0 || second.p.opacity == 0 || third.p.opacity == 0 || fourth.p.opacity == 0){
			this.p.opacity = 1;
			if(this.p.opacity == 1 && second.p.opacity == 1 && third.p.opacity == 1 && fourth.p.opacity ==1){
				addSprite(stage,305,670,'tutorials/squares.png');
				generateChoices(stage,4,3.1,1.9,2,op);
				// countDown();
			}
		}
	});
	stage.insert(first);
	stage.insert(second);
	stage.insert(third);
	stage.insert(fourth);
});

Q.load('mdas.png,playbtn.png,tutorialsbtn.png,backbtn.png,bgmusic.mp3,click.mp3',function(){
 	Q.stageScene('main');
});

// Q.load('backbtn.png,quiz/addbg.png,quiz/subtractbg.png,cupcake/box1.png,cupcake/box2.png,cupcake/box3.png,cupcake/box4.png,cupcake/box5.png,cupcake/box6.png,cupcake/box7.png,cupcake/box8.png,cupcake/box9.png,tutorials/squares.png',function(){
// 	Q.stageScene('beginner');
// });
});

function addSprite(stage,positionX,positionY,image){
	stage.insert(new Q.Sprite({x:positionX,y:positionY,asset:image,scale:1}));
}

function addButton(stage,positionX,positionY,image,event){
	stage.insert(new Q.UI.Button({
		asset:image,
		x:positionX,
		y:positionY,
	},event));
}

function generateChoices(stage,a,b,c,d,op){
	var choice1 = new Q.UI.Button({x:120,y:670,label:a+'',font:"500 85px arial"});
	var choice2 = new Q.UI.Button({x:245,y:670,label:b+'',font:"500 85px arial"});
	var choice3 = new Q.UI.Button({x:370,y:670,label:c+'',font:"500 85px arial"});
	var choice4 = new Q.UI.Button({x:495,y:670,label:d+'',font:"500 85px arial"});
	 choice1.on('click',function(){chars(choice1,choice2,choice3,choice4,2,op);});
	 choice2.on('click',function(){chars(choice1,choice2,choice3,choice4,2,op);});
	 choice3.on('click',function(){chars(choice1,choice2,choice3,choice4,2,op);});
	 choice4.on('click',function(){chars(choice1,choice2,choice3,choice4,2,op);});

	stage.insert(choice1);
	stage.insert(choice2);
	stage.insert(choice3);
	stage.insert(choice4);
}
function getOperation(level){
	var op = 0;
	if(level == 'beginner'){
		op = Math.floor(Math.random()*2);
	}
	else if(level == 'advance'){
		op = Math.floor(Math.random()*3);
	}
	else if(level == 'genius'){
		op = Math.floor(Math.random()*4);
	}
	return op;
}
function generateRandomChoices(stage,ans){
	var arr = [];
	while(arr.length < 3){
	    var randomnumber = Math.ceil(Math.random()*20)
	    if(arr.indexOf(randomnumber) > -1 || randomnumber == ans) continue;
	    arr[arr.length] = randomnumber;
	}
	arr.push(ans);
	var choice1,choice2,choice3,choice4;
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	choice1 = new Q.UI.Button({x:120,y:670,label:arr[0]+'',font:"500 85px arial"},function(){
		setColor(ans,arr,choice1,choice2,choice3,choice4);
		var time = 1;
		var x = setInterval(function(){
			if(time==0){
				clearInterval(x);
				Q.stageScene('beginner');
			}
			--time;
		},1000);
	});
	choice2 = new Q.UI.Button({x:245,y:670,label:arr[1]+'',font:"500 85px arial"},function(){
		setColor(ans,arr,choice1,choice2,choice3,choice4);
		var time = 1;
		var x = setInterval(function(){
			if(time==0){
				clearInterval(x);
				Q.stageScene('beginner');
			}
			--time;
		},1000);
	});
	choice3 = new Q.UI.Button({x:370,y:670,label:arr[2]+'',font:"500 85px arial"},function(){
		setColor(ans,arr,choice1,choice2,choice3,choice4);
		var time = 1;
		var x = setInterval(function(){
			if(time==0){
				clearInterval(x);
				Q.stageScene('beginner');
			}
			--time;
		},1000);
	});
	choice4 = new Q.UI.Button({x:495,y:670,label:arr[3]+'',font:"500 85px arial"},function(){
		setColor(ans,arr,choice1,choice2,choice3,choice4);
		var time = 1;
		var x = setInterval(function(){
			if(time==0){
				clearInterval(x);
				Q.stageScene('beginner');
			}
			--time;
		},1000);
	});
	stage.insert(choice1);
	stage.insert(choice2);
	stage.insert(choice3);
	stage.insert(choice4);
}
function generateGiven(stage,op){
	var given1 = Math.floor((Math.random() * 9) +1);
	var given2 = Math.floor((Math.random() * 9) +1);
	if(given2 > given1){
		var g = given1;
		given1 = given2;
		given2 = g;
	}
	stage.insert(new Q.UI.Text({x:150,y:120,label:given1+'',size:100}));
	stage.insert(new Q.UI.Text({x:290,y:120,label:given2+'',size:100}));
	
	if(op == 0){
		var first,second;
		first = new Q.UI.Button({
			asset:getCakes(given1),
			x:180,
			y:382,
			opacity:0
		},function(){
			this.p.opacity = 1;
		});
		second = new Q.UI.Button({
			asset:getCakes(given2),
			x:420,
			y:382,
			opacity:0
		},function(){
			if(first.p.opacity == 1 && second.p.opacity == 0){
				this.p.opacity = 1;
				addSprite(stage,305,670,'tutorials/squares.png');
				generateRandomChoices(stage,given1 + given2);
			}
		});
		stage.insert(first);
		stage.insert(second);
	}
	else{
		var cake = new Q.UI.Button({
			asset:getCakes(given1),
			x:305,
			y:380
		},function(){
			if(this.p.asset == getCakes(given1)){
				this.p.asset =getCakes(given1-given2);
				addSprite(stage,305,670,'tutorials/squares.png');
				generateRandomChoices(stage,given1 - given2);
			}
		});
		stage.insert(cake);
	}
	console.log(given1 + ' ' + given2 +' ');
}
function chars(choice1,choice2,choice3,choice4,ans,op){
	choice1.p.fontColor = choice2.p.fontColor = choice3.p.fontColor = choice4.p.fontColor="red";
	switch(ans){
		case 1:choice1.p.fontColor = 'blue';break;
		case 2:choice2.p.fontColor = 'blue';break;
		case 3:choice3.p.fontColor = 'blue';break;
		case 4:choice4.p.fontColor = 'blue';break;
	}	
	countDown(op);
}
function setColor(ans,arr,choice1,choice2,choice3,choice4){
	choice1.p.fontColor = 'red';
	choice2.p.fontColor = 'red';
	choice3.p.fontColor = 'red';
	choice4.p.fontColor = 'red';
	if(arr[0] == ans)
		choice1.p.fontColor = 'blue';
	else if(arr[1] == ans)
		choice2.p.fontColor = 'blue';
	else if(arr[2] == ans)
		choice3.p.fontColor = 'blue';
	else if(arr[3] == ans)
		choice4.p.fontColor = 'blue';
}
function countDown(op){
	Q.audio.stop();
	var time = 1;
	var x = setInterval(function(){
		// console.log(op);
		if(time==0){
			clearInterval(x);
			if(op == 'subtract')
				Q.stageScene('multiplytutorial');
			else if(op == 'multiply')
				Q.stageScene('divisiontutorial');
			else if(op == 'add')
				Q.stageScene('subtracttutorial');
			else
				Q.stageScene('main');
		}
		--time;
	},1000);
}
function getCakes(num){
	var str = '';
	switch(num){
		case 1 : str = 'cupcake/box1.png';break;
		case 2 : str = 'cupcake/box2.png';break;
		case 3 : str = 'cupcake/box3.png';break;
		case 4 : str = 'cupcake/box4.png';break;
		case 5 : str = 'cupcake/box5.png';break;
		case 6 : str = 'cupcake/box6.png';break;
		case 7 : str = 'cupcake/box7.png';break;
		case 8 : str = 'cupcake/box8.png';break;
		case 9 : str = 'cupcake/box9.png';break;
	}
	return str;
}

