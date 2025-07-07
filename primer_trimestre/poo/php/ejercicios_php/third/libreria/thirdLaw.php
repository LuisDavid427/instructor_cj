<?php
require_once 'NewtonLaw.php';
class ThirdLaw extends NewtonLaw {
    private float $rForce;

    public function __construct(float $mass, float $acceleration, float $force) {
        parent::__construct($mass, $acceleration, $force);
    }

    public function calculate(): string {
        $force = $this->getForce();
        $this->rForce = -$force;
        return "The reaction force is: " . $this->rForce . " N";
    }
}
