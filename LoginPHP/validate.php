<?php

//connection creation
$conn = new mysqli('localhost','root','','login');
if($conn == false)
{
     die ("Error : could not connect".$mysqli->connect_error);
}else
{
    //echo ("Successfull Connection");
}

//create prepare statement and bind
$stmt=$conn->prepare("select * from login where username=? and password=?");
$stmt->bind_param("ss",$username,$password);

//set parameters and execute
$username=$_POST["username"];
$password=$_POST["password"];
if($stmt->execute())
    {
        //echo "Query Successfully Executed";
    }


$stmt->store_result();  //use this for storing result in table(usefull for user login)

//check if user exists
if($stmt->num_rows>0)
{
    echo "Successfull Login";
}else 
{
    echo "Wrong username Password";
}

//display result //use this for showing result(usefull for showing data on webpage)
//$result=$stmt->get_result();
//while($row=$result->fetch_assoc())
//{
    //echo $row["username"].$row["password"];
//}


?>