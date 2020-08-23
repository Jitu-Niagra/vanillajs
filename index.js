/**
 * Get the birthyear
 * Calculate the age 
 * append the age  on the screen
 * display in the  screen
 */

//   

  const ageInDays=()=>{
    var birthYear=Number(prompt("Which year were you born ...Felix"))
    var ageDays=(2020-birthYear)*365;

    var h1=document.createElement('h1')
    h1.setAttribute('id','text-solution') 

    var text=document.createTextNode("You are " + ageDays + " days old")
    h1.appendChild(text)
    document.getElementById('solution').appendChild(h1);

  }

  const remove=()=>{
      document.getElementById("text-solution").remove();
  }

//   Challange 2
 const genPic=()=>{
     var img=document.createElement('img');
     img.src="scissors.jpg"
    var  imgCon=document.getElementById("imageCon")
    imgCon.appendChild(img)
 }

//  Challange 3
const rpsGame=(yourChoice)=>{
    console.log(yourChoice)
    var humanChoice,botChoice
     humanChoice=yourChoice.id
     botChoice=numberToChoice(randToRpsInt());
     console.log('Computer choice',botChoice)
      results=decideWinner(humanChoice,botChoice);
      console.log (results)
    message=finalMessage(results)
    console.log(message)
    rpsFrontEnd(yourChoice.id,botChoice,message);


}

const randToRpsInt=()=>{
    return Math.floor(Math.random()*3);
}
const numberToChoice=(number)=>{
    return['rock','paper','scissors'][number]
}

const decideWinner=(yourChoice,computerChoice)=>{
    var rpsDatabase={
        'rock':{'scissors':1,"rock":0.5,'paper':0},
        'paper':{'scissors':0,"rock":1,'paper':0.5},
        'scissors':{'scissors':0.5,"rock":0,'paper':1}
    }
    var yourScore=rpsDatabase[yourChoice][computerChoice]
    var computerScore=rpsDatabase[computerChoice][yourChoice]

    return [yourScore,computerScore];
}

const finalMessage=([yourScore,computerScore])=>{
 if(yourScore=== 0){
     return{'message':'You lost','color':'red'}
 } else if(yourScore=== 0.5){
     return{'message':'You tied','color':'yellow'}
 }else{
     return {'message':'You won','color':'yellow'}
 }
}
const rpsFrontEnd =(humanImageChoice,botImageChoice,finalMessage)=>{
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    // Remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div')
    var botDiv=document.createElement('div')
    var messageDiv=document.createElement('div')

    humanDiv.innerHTML="<img src='" +imageDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color : "+finalMessage['color'] + ";font-size:60px padding:30px;'>" +finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='" +imageDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)

    document.getElementById('flex-box-rps-div').appendChild(botDiv)
}
