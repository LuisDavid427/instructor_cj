<?php
class Discount extends Employee {
    private int $riskLevel;

    public function __construct(int $riskLevel) {
        $this->riskLevel = $riskLevel;
    }

    public function getRiskLevel(): int {
        return $this->riskLevel;
    }

    public function swARL(): float {
        return match ($this->riskLevel) {
            1 => 0.00522,
            2 => 0.01044,
            3 => 0.02436,
            4 => 0.04350,
            5 => 0.06960,
            default => 0,
        };
    }

    public function calculateDiscount(): float {
        return $this->getBaseSalary() * 0.08 + $this->getBaseSalary() * $this->swARL();
    }
}
?>
