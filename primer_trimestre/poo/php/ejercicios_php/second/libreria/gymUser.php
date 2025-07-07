<?php
class GymUser {
    private string $firstName;
    private string $lastName;
    private string $plan;
    private float $weight;
    private float $height;
    private int $id;

    public function getId(): int {
        return $this->id;
    }

    public function getFirstName(): string {
        return $this->firstName;
    }

    public function getLastName(): string {
        return $this->lastName;
    }

    public function getWeight(): float {
        return $this->weight;
    }

    public function getHeight(): float {
        return $this->height;
    }

    public function getPlan(): string {
        return $this->plan;
    }

    public function setFirstName(string $firstName): void {
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName): void {
        $this->lastName = $lastName;
    }

    public function setWeight(float $weight): void {
        $this->weight = $weight;
    }

    public function setHeight(float $height): void {
        $this->height = $height;
    }

    public function setPlan(string $plan): void {
        $this->plan = $plan;
    }

    public function setId(int $id): void {
        $this->id = $id;
    }
}
?>