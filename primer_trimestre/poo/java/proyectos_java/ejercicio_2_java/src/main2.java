class main2 {
    public static void main(String[] args) {
        gymUser gymUser = new gymUser();
        gymUser.setFirstName("John");
        gymUser.setLastName("Doe");
        gymUser.setWeight(70.0);
        gymUser.setHeight(1.75);
        gymUser.setPlan("Basic");
        gymUser.setId(12345);

        premium premium = new premium();
        basic basic = new basic();
        medium medium = new medium();


        System.out.println("gym user: " + gymUser.getFirstName());
        System.out.println("Last name: " + gymUser.getLastName());
        System.out.println("ID: " + gymUser.getId());
        System.out.println("Weight: " + gymUser.getWeight() + " kg");
        System.out.println("Height: " + gymUser.getHeight() + " m");
        System.out.println("Plan: " + gymUser.getPlan());
        if ((gymUser.getPlan()==("Basic"))){
            System.out.println("Plan description: " + basic.description());
            System.out.println("price: " + basic.price());
        } else if (gymUser.getPlan()==("Medium")) {
            System.out.println("Plan description: " + medium.description());
            System.out.println("price: " + medium.price());
        } else if (gymUser.getPlan()==("Premium")) {
            System.out.println("Plan description: " + premium.description());
            System.out.println("price: " + premium.price());
        }
        

        
    }
}