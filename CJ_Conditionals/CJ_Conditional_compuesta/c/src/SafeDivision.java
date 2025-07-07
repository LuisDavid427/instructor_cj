    class SafeDivision {
    double numerator = 10;
    double denominator = 2;

    public String divide() {
        if (denominator != 0) {
            return "Result: " + (numerator / denominator);
        } else {
            return "Cannot divide by zero.";
        }
    }
}
