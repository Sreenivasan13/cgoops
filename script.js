
// class Game{
//     teams = [];
//     addTeam(team){
//         this.teams.push(team);
//     }

// }
var maxscore=0;
var maxteam="";
var winteamA={team:"",score:0,player:-1}; 
var winteamB={team:"",score:0,player:-1};
class Team{
    teamscore=0;
    // players = [];
    playerscore=[];
    // addPlayers(player){
    //     this.players.push(player);
    // }

}
class Player{
    // id;
    score = 0;
    // noBalls =[];
    // constructor(id){
    //     this.id = id;
    // }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    async hit(id){ 
        // let content = document.getElementsByTagName("th");

        
        
        // console.log(id);
    
        for(let i = 1; i <= 6; i++){
            let randScore = Math.floor(Math.random() * 7);
            if(randScore > 0){
                // await sleep(1000)
                // this.noBalls.push(randScore);
                this.score = this.score + randScore;
                var a=id+i;
                console.log(a);
                let content = document.getElementById(id+i); p11

                content.innerHTML=randScore;
                // await sleep(1000);

                if(i==6){
                    document.getElementById("total"+id).innerHTML=this.score;
                }

                else{
                    await sleep(1000)
                }
                // document.body.append(content);
            }else{
                for(let j=i;j<=6;j++){
                    
                    console.log(id+j)
                    let content = document.getElementById(id+j);
                    content.innerHTML=0;
                    // await sleep(1000)
                    if(j==6){
                        document.getElementById("total"+id).innerHTML=this.score;
                    }
                    else{
                        await sleep(1000)
                    }

                }
                break;
                 
            }
           
        } 

        // return this.score;
       
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
async function cls(temp){
    
    for(i=60;i>=0;i--){
        
        document.getElementById("secs").innerHTML=i; 
        await sleep(1000);
    }
}
async function hit1(){
    
    document.getElementById("secs").innerHTML=60;
    let team1 = new Team();

    for(let i = 1; i <= 10; i++){
        let player = new Player();
    
        player.hit("p"+i); 
        await sleep(6000)
        var temp=Number(document.getElementById("totalp"+i).innerHTML);
        team1.playerscore.push(temp);
        team1.teamscore=team1.teamscore+temp;
        console.log(temp);
        console.log(team1.teamscore)
    }
    var max=Math.max(...team1.playerscore);
    console.log(max);

    
        winteamA.player=team1.playerscore.indexOf(max)+1;
        winteamA.score=max;
        winteamA.team="A";
    

    var btn=document.getElementById("btn1");
    btn.disabled=true;
    
    document.getElementById("score1").innerText=team1.teamscore;

    if(maxscore<team1.teamscore){
        maxteam="A";
        maxscore=team1.teamscore;
    }

    
}

async function hit2(){

    document.getElementById("secs").innerHTML=60;
    let team2 = new Team();

    for(let i = 1; i <= 10; i++){
        let player = new Player();
        
        player.hit("q"+i);
        await sleep(6000)
        var temp=Number(document.getElementById("totalq"+i).innerHTML);
        team2.playerscore.push(temp);
        team2.teamscore=team2.teamscore+temp;

    }
    var max=Math.max(...team2.playerscore);
    console.log(max);

   
        winteamB.player=team2.playerscore.indexOf(max)+1;
        winteamB.score=max;
        winteamB.team="B";
    

    document.getElementById("score2").innerText=team2.teamscore;

    document.getElementById("btn2").disabled=true;

    if(maxscore<team2.teamscore){
        maxteam="B";                       
        maxscore=team2.teamscore;
    }

}


    function result(){
        
        document.getElementById("team").innerText+=" "+maxteam;

        if(maxteam=="A"){
        
        document.getElementById("player").innerText+=" "+winteamA.player;
        document.getElementById("score").innerText+=" "+winteamA.score;
        document.getElementById("teamname").innerText+=" "+winteamA.team;
            
        }
        else{
            document.getElementById("player").innerText+=" "+winteamB.player;
            document.getElementById("score").innerText+=" "+winteamB.score;
            document.getElementById("teamname").innerText+=" "+winteamB.team;
        }
    }
