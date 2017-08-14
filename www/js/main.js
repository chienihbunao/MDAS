window.addEventListener("load",function() {


var Q = window.Q = Quintus({development:true})
        .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI")
        .setup({width:600,height:800,scaleToFit:true})
        .touch()

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
Q.scene('main',function(stage){
	 addSprite(stage,widthQ,heightQ,'mdas.png');
	 addButton(stage,295,505,'playbtn.png',function(){
		Q.load('stagebg.png,beginnerbtn.png,advancebtn.png,geniusbtn.png',function(){
			Q.stageScene('stages');
		});
	 });
	 addButton(stage,300,605,'tutorialsbtn.png',function(){
		// Q.load('tutorials/addbg.png,tutorials/1cake.png,tutorials/2cake.png,tutorials/squares.png',function(){
		// 	Q.stageScene('addtutorial');
		// });
		Q.load('tutorials/subtractbg.png,tutorials/5cake.png,tutorials/5xcake.png,tutorials/addbg.png,tutorials/1cake.png,tutorials/2cake.png,tutorials/squares.png,tutorials/multiplybg.png,tutorials/divisionbg.png,tutorials/3cake.png,tutorials/1rcake.png',function(){
			Q.stageScene('addtutorial');
		});
	 });
});

Q.scene('stages',function(stage){
	addSprite(stage,widthQ,heightQ,'stagebg.png');
	addButton(stage,60,70,'backbtn.png',function(){
		Q.stageScene('main');
	});
	addButton(stage,305,450,'beginnerbtn.png',function(){});
	addButton(stage,305,530,'advancebtn.png',function(){});
	addButton(stage,305,610,'geniusbtn.png',function(){});
});
Q.scene('addtutorial',function(stage){
	op = 'add';
	var first,second;
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

Q.load('mdas.png,playbtn.png,tutorialsbtn.png,backbtn.png',function(){
 	Q.stageScene('main');
});

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
function countDown(op){
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