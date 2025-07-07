class gymUser {
    private String firstName, lastName, plan;
    private double weight, height;
    private int id;

    public int getId() {
        return id;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public double getWeight() {
        return weight;
    }
    public double getHeight() {
        return height;
    }
    public String getPlan() {
        return plan;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public void setHeight(double height) {
        this.height = height;
    }
    public void setPlan(String plan) {
        this.plan = plan;
    }
    public void setId(int id) {
        this.id = id;
    }
}

