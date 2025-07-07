class main {
    public static void main(String[] args) {
        student student = new student();
        student.setFirstName("Juan");
        student.setLastName("Pérez");
        student.setID(123456);
        student.setPhone(987654321);
        student.setLicense("A");
        student.setRH("O+");
        a a = new a();
        b b = new b();
        c c = new c();
        
        System.out.println("user: " + student.getFirstName());
        System.out.println("user last name: " + student.getLastName());
        System.out.println("ID: " + student.getID());
        System.out.println("phone: " + student.getPhone());
        System.out.println("RH: " + student.getRH());
        
        if (student.getLicense()==("A")) {
            System.out.println("license: " + a.description());
            System.out.println("price: " + a.price());
        } else if (student.getLicense()==("B")) {
            System.out.println("license: " + b.description());
            System.out.println("price: " + b.price());
        } else if (student.getLicense()==("C")) {
            System.out.println("license: " + c.description());
            System.out.println("price: " + c.price());
        } else {
            System.out.println("Invalid license type");
        }

    }
}