<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
   <?php 
   var_dump($_POST);
   if(isset($_POST["message"])){
    $retour= mail("contact@artecoenergie.fr" , $_POST['sujet'], $_POST['message'],"Reply-to:" . $_POST['email'])
if ($retour) {
 echo "<p> votre message à bien été envoyé</p>";
}
   }

</body>
</html>
  






