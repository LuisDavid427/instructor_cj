<?php
class Student {
    private string $firstName;
    private string $lastName;
    private string $license;
    private string $rH;
    private int $iD;
    private int $phone;

    public function getID(): int {
        return $this->iD;
    }

    public function getFirstName(): string {
        return $this->firstName;
    }

    public function getLastName(): string {
        return $this->lastName;
    }

    public function getPhone(): int {
        return $this->phone;
    }

    public function getLicense(): string {
        return $this->license;
    }

    public function getRH(): string {
        return $this->rH;
    }

    public function setID(int $iD): void {
        $this->iD = $iD;
    }

    public function setFirstName(string $firstName): void {
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName): void {
        $this->lastName = $lastName;
    }

    public function setPhone(int $phone): void {
        $this->phone = $phone;
    }

    public function setLicense(string $license): void {
        $this->license = $license;
    }

    public function setRH(string $rH): void {
        $this->rH = $rH;
    }
}