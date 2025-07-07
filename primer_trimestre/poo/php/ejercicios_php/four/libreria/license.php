<?php
abstract class License {
    public abstract function price(): int;
    public abstract function description(): string;
}