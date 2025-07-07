<?php
require_once 'libreria/license.php'; 
require_once 'libreria/student.php';
require_once 'libreria/a.php';
require_once 'libreria/b.php';
require_once 'libreria/c.php';

$student = new Student();
$student->setFirstName("Juan");
$student->setLastName("Pérez");
$student->setID(123456);
$student->setPhone(987654321);
$student->setLicense("A");
$student->setRH("O+");

$a = new A();
$b = new B();
$c = new C();

echo "user: " . $student->getFirstName();
echo "<br>";
echo "user last name: " . $student->getLastName();
echo "<br>";
echo "ID: " . $student->getID();
echo "<br>";
echo "phone: " . $student->getPhone();
echo "<br>";
echo "RH: " . $student->getRH();
echo "<br>";

if ($student->getLicense() === "A") {
echo "license: " . $a->description();
echo "<br>";
echo "price: $" . $a->price();
} elseif ($student->getLicense() === "B") {
echo "license: " . $b->description();
echo "<br>";
echo "price: $" . $b->price();
} elseif ($student->getLicense() === "C") {
echo "license: " . $c->description();
echo "<br>";
echo "price: $" . $c->price();
} else {
echo "Invalid license type";
}