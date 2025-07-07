public class GreaterNumber {
    double number1 = 10;
    double number2 = 20;

    public String compareNumbers() {
        if (number1 > number2) {
            return "The greater number is: " + number1;
        } else if (number2 > number1) {
            return "The greater number is: " + number2;
        } else {
            return "Both numbers are equal";
        }
    }
}
