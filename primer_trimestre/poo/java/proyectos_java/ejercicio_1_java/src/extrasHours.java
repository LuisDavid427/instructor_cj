public class extrasHours {
    private int dHours;
    private int nHours;
    private int hHours;

    public extrasHours( int dHours, int nHours, int hHours) {
        this.dHours = dHours;
        this.nHours = nHours;
        this.hHours = hHours;
    }
    public double getdHours() {
        return this.dHours;
    }
    public double getnHours() {
        return this.nHours;
    }
    public double gethHours() {
        return this.hHours;
    }
    public double  calculateEH(){
        return this.dHours * 5000 * 1.25 + this.nHours * 5000 * 1.75 + this.hHours * 5000 * 2;
    }

}
