
var counter=0;
var reset=0;
var num =0;
$(function(){

    $("#maze .boundary").mouseover(lossing);
    $("#end").mouseover(endPoint);
    $("#maze").mouseenter(mazeEnter)
    // $("#maze").mouseout(mazeOut)
    $("#start").mouseover(resetPoint);
  
});

//  function mazeOut(){
//     reset=0;
//  }

function mazeEnter(){
    reset++;
    num++;
}

function lossing(evt) {
    $("#maze .boundary").addClass('youlose');
    
     
}

function endPoint(evt){
    if(counter==0 && reset>0 && num==1){
        $("#status").text("You won");
    }

    else{
        $("#status").text("You lost");
        counter ++;
        num++;
    }
}

function resetPoint(evt){
    $("#maze .boundary").css('background-color','blue');
     location.reload();
}

