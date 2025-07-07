public class PurchaseDiscount {
    double totalAmount = 120;

    public String calculateTotal() {
        if (totalAmount > 100) {
            double discount = totalAmount * 0.10;
            return "Total after discount: $" + (totalAmount - discount);
        } else {
            return "Total to pay: $" + totalAmount;
        }
    }
}
