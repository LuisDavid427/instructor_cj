class main1 {
    public static void main(String[] args) {

        Employee employee = new Employee ();
        employee.setName("John Doe");
        employee.setBaseSalary(1000000);
        extrasHours extrasHours = new extrasHours( 10, 5, 2);
        discount discounts = new discount(1);
        double totalPay = employee.getBaseSalary() + extrasHours.calculateEH() - discounts.calculateDiscount();

        System.out.println("Employee: " + employee.getName());
        System.out.println("Total Pay: $" + totalPay);
        
    }
}