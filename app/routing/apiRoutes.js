module.exports = function(app){

app.post("/api/match",function(req,res){

	var You=0;
	req.body.map(x =>{
		You+=x;
	});

	var holder =0;
	var MatchNum = 100;
	var MatchID;


	for(i=0;i<users.length;i++){
		holder = 0
		for(j=0;j<users[i].answers.length;j++){
			holder += users[i].answers[j];
		}
		if(Math.abs(You - holder) < MatchNum){
			MatchID = i;
		}
	}





})


var users = [{
		name:"Juan",
		answers:[1,2,3,4,5,6,7,8,9,10],
		img:""
	},{
		name:"Alex",
		answers:[6,3,6,8,3,2,2,2,8,9],
		img:""
	},{
		name:"Gonzalo",
		answers:[2,2,2,3,3,3,2,2,2,1],
		img:"",
	},{
		name:"Alessandra"
		answers:[10,5,6,7,8,4,6,2,10,10],
		img:"",
	}];



}