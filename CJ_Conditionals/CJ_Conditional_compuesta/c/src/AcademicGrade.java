public class AcademicGrade {
    int grade = 14;

    public String classifyGrade() {
        if (grade < 10) {
            return "Failed";
        } else if (grade <= 13) {
            return "Fair";
        } else if (grade <= 17) {
            return "Good";
        } else if (grade <= 20) {
            return "Excellent";
        } else {
            return "Invalid grade";
        }
    }
}
