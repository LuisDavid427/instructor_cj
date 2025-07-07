public class SystemAccess {
    String username = "admin";
    String password = "1234";

    public String checkAccess() {
        if (username.equals("admin") && password.equals("1234")) {
            return "Access granted";
        } else {
            return "Access denied";
        }
    }
}
