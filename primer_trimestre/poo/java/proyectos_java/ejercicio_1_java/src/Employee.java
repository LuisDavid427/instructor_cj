    public class Employee{
    private String name;
    private double baseSalary=1000000;


    public String setName(String name) {
        return this.name = name;
    }
    public double setBaseSalary(double baseSalary) {
       return this.baseSalary = baseSalary;

    }
    public String getName() {
        return name;
    }
    public int getBaseSalary() {
        return (int) this.baseSalary;
    }
    }


