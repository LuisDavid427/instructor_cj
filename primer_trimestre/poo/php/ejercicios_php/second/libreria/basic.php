<?php

class Basic extends Plan {
    public function price(): int {
        return 50000;
    }

    public function description(): string {
        return "Basic plan = General access";
    }
}
?>