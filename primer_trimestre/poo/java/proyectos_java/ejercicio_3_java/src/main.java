class main {
    public static void main(String[] args) {
        firstLaw firstLaw = new firstLaw(10, 5, 0);
        firstLaw.calculate();
        System.out.println(firstLaw.calculate());
        secondLaw secondLaw = new secondLaw(10, 5, 0);
        secondLaw.calculate();
        System.out.println(secondLaw.calculate());
        thirdLaw thirdLaw = new thirdLaw(10, 5, 30);
        thirdLaw.calculate();
        System.out.println(thirdLaw.calculate());
    }
}