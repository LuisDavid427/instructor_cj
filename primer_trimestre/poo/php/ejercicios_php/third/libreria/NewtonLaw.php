<?php

abstract class NewtonLaw {
    private float $mass;
    private float $acceleration;
    private float $force;

    public function __construct(float $mass, float $acceleration, float $force) {
        $this->mass = $mass;
        $this->acceleration = $acceleration;
        $this->force = $force;
    }

    public function getMass(): float {
        return $this->mass;
    }

    public function getAcceleration(): float {
        return $this->acceleration;
    }

    public function getForce(): float {
        return $this->force;
    }

    abstract public function calculate(): string;
}
