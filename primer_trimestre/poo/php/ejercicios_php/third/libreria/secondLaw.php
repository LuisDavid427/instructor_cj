<?php
require_once 'NewtonLaw.php';
class SecondLaw extends NewtonLaw {
    public function __construct(float $mass, float $acceleration, float $force) {
        parent::__construct($mass, $acceleration, $force);
    }

    public function calculate(): string {
        $mass = $this->getMass();
        $acceleration = $this->getAcceleration();
        $force = $mass * $acceleration;
        return "The force is: " . $force . " N";
    }
}
