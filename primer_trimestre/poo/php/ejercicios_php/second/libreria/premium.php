<?php

class Premium extends Plan {
    public function price(): int {
        return 120000;
    }

    public function description(): string {
        return "Premium plan = Full access + personal trainer + wet zone";
    }
}
?>