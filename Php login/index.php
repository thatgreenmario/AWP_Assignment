<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Page</title>
</head>
<body>
    <form action="" method="POST">
        UserName:<input type="text" name="user">
        <br>
        Password:<input type="password" name="pass">
        <br>
        <input type="submit" value="login" name="submit">
    </form>

    <?php 

        //to check connection to database
        define('USER','root');
        define('PASSWORD','');
        define('HOST','localhost');
        define('DATABASE','user-registration');

        $conn = new mysqli(HOST,USER,PASSWORD,DATABASE);

        if($conn == false)
        {
            die("Error : could not connect ". $mysqli->connect_error);

        }else
        {
            //die("connection Successfull");
        }

        //prepare and bind
        $stmt = $conn->prepare("SELECT * FROM login WHERE username = ? ");
        $stmt->bind_param("s",$username);

        //set parameters and execute
        $username="root";
        if($stmt->execute())
        {
            echo "success";
        }

      //  $stmt->store_result();
       // $stmt->bind_result($vishal,$omakar);  // number of arguments must match columns in SELECT

        $result=$stmt->get_result();            //Easy Method 
       if($stmt->num_rows()>0)
       {
        
        echo "user exits";
        while ($stmt->fetch()) {
            echo $vishal; 
            echo $omakar; 
        }
       }
       else
       {
           echo "no";
       }


      
       //echo $result;
    //   while ($row = $result->fetch_array(MYSQLI_NUM))            both fetch array and fetch assoc is working with get result
      //  {
        //    foreach ($row as $r)
          //  {
            //    print "$r ";
        //    }
        //    print "\n";
      //}

 while($row = $result->fetch_assoc()) {
    echo $row["username"].$row["password"];
}


    ?>

   
</body>
</html>