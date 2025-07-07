<?php

class Help extends Employee {
    private $helpM;
    private $minWage = 1300000;

    public function __construct($helpM) {
        $this->helpM = $helpM;
    }

    public function getHelpM() {
        return $this->helpM;
    }

    public function calculateHelp() {
        if ($this->getBaseSalary() < 2 * $this->minWage) {
            return 0;
        } else {
            return $this->minWage;
        }
    }
}
?>