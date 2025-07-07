<?php
require_once 'libreria/Employee.php';
require_once 'libreria/ExtrasHours.php';
require_once 'libreria/Discount.php';
require_once 'libreria/help.php';


$employee = new Employee();
$employee->setName("John Doe");
$employee->setBaseSalary(1000000);

$extrasHours = new ExtrasHours(10, 5, 2);

$discounts = new Discount(1);

$totalPay = $employee->getBaseSalary() + $extrasHours->calculateEH() - $discounts->calculateDiscount();

echo "Employee: " . $employee->getName();
echo "<br>";
echo "Total Pay: $" . $totalPay;

