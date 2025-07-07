public class firstLaw extends NewtonLaw {
    public firstLaw(double mass, double acceleration, double force) {
        super(mass, acceleration, force);
    }
    @Override
    public String calculate() {
        double force = getForce();
        if(force==0){
            return ("force at rest" );
        } 
        else{
            return ("force in motion" );
        }
    }

}
