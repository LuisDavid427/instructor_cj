<?php
require_once 'NewtonLaw.php';
class FirstLaw extends NewtonLaw {
    public function __construct(float $mass, float $acceleration, float $force) {
        parent::__construct($mass, $acceleration, $force);
    }

    public function calculate(): string {
        $force = $this->getForce();
        if ($force == 0) {
            return "force at rest";
        } else {
            return "force in motion";
        }
    }
}
