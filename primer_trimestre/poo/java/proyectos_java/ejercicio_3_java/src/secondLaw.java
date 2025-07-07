public class secondLaw extends NewtonLaw {
    public secondLaw(double mass, double acceleration, double force) {
        super(mass, acceleration, force);
    }
    @Override
    public String calculate() {
        double mass = getMass();
        double acceleration = getAcceleration();
        double force = mass*acceleration;
        return "The force is: " + force + " N";
    }
}
