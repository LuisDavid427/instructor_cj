<?php
require_once 'libreria/plan.php';
require_once 'libreria/gymUser.php';
require_once 'libreria/basic.php';
require_once 'libreria/medium.php';
require_once 'libreria/premium.php';

$gymUser = new GymUser();
$gymUser->setFirstName("John");
$gymUser->setLastName("Doe");
$gymUser->setWeight(70.0);
$gymUser->setHeight(1.75);
$gymUser->setPlan("Basic");
$gymUser->setId(12345);

$basic = new Basic();
$medium = new Medium();
$premium = new Premium();

echo "Gym user: " . $gymUser->getFirstName();
echo "<br>";
echo "Last name: " . $gymUser->getLastName();
echo "<br>";
echo "ID: " . $gymUser->getId();
echo "<br>";
echo "Weight: " . $gymUser->getWeight() . " kg";
echo "<br>";
echo "Height: " . $gymUser->getHeight() . " m";
echo "<br>";
echo "Plan: " . $gymUser->getPlan();
echo "<br>";

if ($gymUser->getPlan() === "Basic") {
echo "Plan description: " . $basic->description();
echo "<br>";
echo "Price: $" . $basic->price();
echo "<br>";
} elseif ($gymUser->getPlan() === "Medium") {
echo "Plan description: " . $medium->description();
echo "<br>";
echo "Price: $" . $medium->price();
echo "<br>";
} elseif ($gymUser->getPlan() === "Premium") {
echo "Plan description: " . $premium->description();
echo "<br>";
echo "Price: $" . $premium->price();
}
?>