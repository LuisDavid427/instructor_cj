

abstract class NewtonLaw {
    private double mass;
    private double acceleration;
    private double force;
    public abstract String calculate();

    public NewtonLaw(double mass, double acceleration, double force){
        this.mass = mass;
        this.acceleration = acceleration;
        this.force = force;
    }
    public double getMass() {
        return mass;
    }
    public double getAcceleration() {
        return acceleration;
    }
    public double getForce() {
        return force;
    }
   
}