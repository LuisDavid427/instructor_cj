public class tikets {
    public static void main(String[] args) {
    int money=543;

    int t100=money/100;
    money=money%100;
    int t50=money/50;
    money=money%50;
    int t20=money/20;
    money=money%20;
    int t10=money/10;
    money=money%10;
    int t5=money/5;
    money=money%5;
    int t1=money/1;
    money=money%1;

    System.out.println("tikets of 100: " + t100);
    System.out.println("tikets of 50: " + t50);
    System.out.println("tikets of 20: " + t20);
    System.out.println("tikets of 10: " + t10);
    System.out.println("tikets of 5: " + t5);
    System.out.println("tikets of 1: " + t1);

    }
}
