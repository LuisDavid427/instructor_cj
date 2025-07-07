public class E_hours {
    public static void main(String[] args) {
    int E_hours=41;
    int tarifed_hours=5000;
    if (E_hours>40) {
        double pay=E_hours*tarifed_hours*1.5;
        System.out.println("your pay of extras hours is: " + pay);
    } else {
        double payN=E_hours*tarifed_hours*1.5;
        System.out.println("Your pay is: "+ payN);
    }
    }
}
