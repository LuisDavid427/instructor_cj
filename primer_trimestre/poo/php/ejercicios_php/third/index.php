<?php
require_once ('libreria/firstLaw.php'); 
require_once ('libreria/secondLaw.php'); 
require_once ('libreria/thirdLaw.php'); 
require_once ('libreria/NewtonLaw.php'); 
$firstLaw = new FirstLaw(10, 5, 0);
echo "fisrt law = ";
echo $firstLaw->calculate();
echo "<br>";
echo "second law = ";
$secondLaw = new SecondLaw(10, 5, 0);
echo $secondLaw->calculate();
echo "<br>";
echo "third law = ";
$thirdLaw = new ThirdLaw(10, 5, 30);
echo $thirdLaw->calculate();
