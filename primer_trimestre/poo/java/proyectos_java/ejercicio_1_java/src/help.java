public class help extends Employee {
    
    private int helpM;
    private int minWage = 1300000;
    
    public help( int helpM) {
        this.helpM = helpM;
    }
    public int getHelpM() {
        return helpM;
    }
    public int calculateHelp(){
        if(getBaseSalary() < 2 * this.minWage){
            return 0;
        }
        else {
            return this.minWage;
        }
    }
}
