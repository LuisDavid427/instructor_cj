<?php

class Medium extends Plan {
    public function price(): int {
        return 75000;
    }

    public function description(): string {
        return "Medium plan = General access + directed classes";
    }
}
?>