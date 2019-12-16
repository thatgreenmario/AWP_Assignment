var questions=["Grand Central Terminal, Park Avenue, New York is the world's","Entomology is the science that studies","Eritrea, which became the 182nd member of the UN in 1993, is in the continent of"]
var options=["largest railway station","highest railway station","longest railway station","None of the above","Behavior of human beings","Insects","The origin and history of technical and scientific terms","The formation of rocks","Asia","Africa","Europe","Australia"]
var submittedanswer=[]
var correctanswers=["a","b","b"]

var i=0;
var j=0;
function start()
{
    if(i==correctanswers.length)
    {
        final();
        return;
    }

    document.write(questions[i]);
    i++;

    linebreak1 = document.createElement("br");
    document.body.appendChild(linebreak1);

    var q = document.createElement("LABEL");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.setAttribute("name","ans");
    x.setAttribute("value",'a')
    document.body.appendChild(x);
    q.innerHTML=options[j];
    j++;
    document.body.appendChild(q);
    linebreak2 = document.createElement("br");
    document.body.appendChild(linebreak2);

    var w = document.createElement("LABEL");
    var y = document.createElement("INPUT");
    y.setAttribute("type", "radio");
    y.setAttribute("name","ans");
    y.setAttribute("value",'b')
    document.body.appendChild(y);
    w.innerHTML=options[j];
    j++;
    document.body.appendChild(w);
    linebreak3 = document.createElement("br");
    document.body.appendChild(linebreak3);

    var t = document.createElement("LABEL");
    var z = document.createElement("INPUT");
    z.setAttribute("type", "radio");
    z.setAttribute("name","ans");
    z.setAttribute("value",'c')
    document.body.appendChild(z);
    t.innerHTML=options[j];
    j++;
    document.body.appendChild(t);
    linebreak4 = document.createElement("br");
    document.body.appendChild(linebreak4);

    var f = document.createElement("LABEL");
    var w = document.createElement("INPUT");
    w.setAttribute("type", "radio");
    w.setAttribute("name","ans");
    w.setAttribute("value",'d')
    document.body.appendChild(w);
    f.innerHTML=options[j];
    j++;
    document.body.appendChild(f);
    linebreak5 = document.createElement("br");
    document.body.appendChild(linebreak5);

    //console.log(document.getElementsByName("ans").value); 
    console.log(submittedanswer);
    var o = document.createElement("BUTTON");
    o.innerHTML="next";
    document.body.appendChild(o);
    o.onclick=check23;

}

    function check23()
    {
        var rates = document.getElementsByName('ans');
        var rate_value;
        for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].getAttribute("value");
        }
    }
        //console.log(rate_value);
        submittedanswer.push(rate_value);
        document.body.innerHTML = "";
        start();
    }

    function final()
    {
        document.write("Quiz Over");
        linebreak6 = document.createElement("br");
        document.body.appendChild(linebreak6);
        
        document.write("Your Score : ");
        var c=0;
        for(var i=0;i<correctanswers.length;i++)
        {
            if(submittedanswer[i]!=correctanswers[i])
            {

            } else
            {
                c++;
            }
        } 
        document.write(c + "/" + correctanswers.length);

    }
    
