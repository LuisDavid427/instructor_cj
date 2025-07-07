
public class Reader {

    public String name;
    public String email;
    public String nCarnet;

    public Reader() {
    }

    public Reader(String name, String email, String nCarnet) {
        this.name = name;
        this.email = email;
        this.nCarnet = nCarnet;
    }

    @Override
    public String toString() {
        return "lector [name=" + name + ", email=" + email + ", nCarnet=" + nCarnet + "]";
    }

}
