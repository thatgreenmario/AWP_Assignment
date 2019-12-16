
function filter(value) {
    var x = document.getElementsByClassName(value)
    //console.log(x);
    //console.log(document.getElementById("main").innerHTML)
    // x.style.display ="hide";
    //console.log(document.getElementsByClassName(value).length)
    var contents = "";
    for (var i = 0; i < document.getElementsByClassName(value).length; i+=1) {
        contents += "<div>"+document.getElementsByClassName(value)[i].innerHTML+"</div>";
    }
    document.getElementById("main").innerHTML = contents;
    //console.log(contents)
}


function addtocart(value)
{
    console.log(value);
    
    var cartable=document.getElementById("cart");
    var row=cartable.insertRow(0);
    var row1=cartable.insertRow(1);
    var cell=row.insertCell(0);
    var cell1=row1.insertCell(0);
    var cell2=row1.insertCell(0);

    //document.getElementById(value).value=y;
    var d  = value.cloneNode(true);
    d.setAttribute('id',"sec")
    console.log(d.getAttribute("data-price"));
    console.log(d.getAttribute("data-name"));
    cell.appendChild(d);
    //cell1.innerHTML=d.getAttribute("data-name");
    var k = "Name : "+ d.getAttribute("data-name")+ "  Price : " + d.getAttribute("data-price")
    cell2.innerHTML=k;
    
}
