<?php
class Employee {
    private $name;
    private $baseSalary = 1000000;

    public function setName($name) {
        $this->name = $name;
        return $this->name;
    }

    public function setBaseSalary($baseSalary) {
        $this->baseSalary = $baseSalary;
        return $this->baseSalary;
    }

    public function getName() {
        return $this->name;
    }

    public function getBaseSalary() {
        return (int) $this->baseSalary;
    }
}
?>