public class discount extends Employee {
    private int riskLevel;

    public discount( int riskLevel) {
        super();
        this.riskLevel = riskLevel;
    }
    public int getRiskLevel() {
        return this.riskLevel;
    }
    public double swARL(){
        return switch (this.riskLevel) {
            case 1 -> 0.00522;
            case 2 -> 0.01044;
            case 3 -> 0.02436;
            case 4 -> 0.04350;
            case 5 -> 0.06960;
            default -> 0;
        };
    }
    public double calculateDiscount(){
        return getBaseSalary() * 0.08 + getBaseSalary() * swARL();
    }
}
