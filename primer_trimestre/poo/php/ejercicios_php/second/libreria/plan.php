<?php
abstract class Plan {
    public abstract function price(): int;
    public abstract function description(): string;
}