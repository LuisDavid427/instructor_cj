<?php
class ExtrasHours {
    private $dHours;
    private $nHours;
    private $hHours;

    public function __construct($dHours, $nHours, $hHours) {
        $this->dHours = $dHours;
        $this->nHours = $nHours;
        $this->hHours = $hHours;
    }

    public function getDHoras() {
        return $this->dHours;
    }

    public function getNHoras() {
        return $this->nHours;
    }

    public function getHHoras() {
        return $this->hHours;
    }

    public function calculateEH() {
        return $this->dHours * 5000 * 1.25 + $this->nHours * 5000 * 1.75 + $this->hHours * 5000 * 2;
    }
}
?>