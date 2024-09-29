function calculate() {
    var present=Number(document.getElementById('present').value);
    var conducted=Number(document.getElementById("conducted").value);
    var target=Number(document.getElementById("target").value);
    if(present>conducted) {
        document.getElementById("output").style.color="red";
        document.getElementById("output").innerHTML="invalid input! enter valid data."
    } else {
        bunk(present, conducted,target);
    }
}

function bunk (present, conducted, target) {
    var attendance=present*100/conducted;
    attendance = Math.round(attendance*100)/100;

    var count=0;
    if(attendance>target) {
        var tp=present, tc=conducted, ta=Math.round(tp*10000/tc)/100;
        while(ta>target) {
            tc++;
            ta=Math.round(tp*10000/tc)/100;
            count++;
        }
        turn("gay","output");
        //advance();
        document.getElementById("output").innerHTML=" You can bunk "+count+" classes. Your Attendance is at "+attendance+"%.";
    } else if(attendance<target) {
        var tp=present, tc=conducted, ta=attendance;
        while(ta<target) {
            tp++;tc++;
            ta=Math.round(tp*10000/tc)/100;
            count++;
        }
        turn("gay","output");        
        //advance();
        document.getElementById("output").innerHTML=" You should attend "+count+" classes. Your Attendance is at "+attendance+"%.";
    } else {
        turn("gay","output");
        //advance();
        document.getElementById("output").innerHTML= "Target Reached!! Your Attendance is at "+attendance+"%.";
    }
}

function responsive() {
    
}

/*function advance() {
    turn("lesbo","output2");
    var a="For Advance Analysis";
    document.getElementById("output2").innerHTML=a+" <a href='index.html'>Click here </a>";
}*/

function turn(x, y){
    document.getElementById(x).setAttribute("id",y);
}