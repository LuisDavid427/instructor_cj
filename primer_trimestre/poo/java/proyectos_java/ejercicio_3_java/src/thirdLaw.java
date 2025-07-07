public class thirdLaw extends NewtonLaw {
    private double rForce;
    public thirdLaw(double mass, double acceleration, double force) {
        super(mass, acceleration, force);
    }
    @Override
    public String calculate() {
        double force = getForce();
        double rforce = 0-force;
        return "The reaction force is: " + rforce + " N";
    }
}
