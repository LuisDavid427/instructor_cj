    class TimeOfDay {
    int hour = 21;

    public String getTimePeriod() {
        if (hour >= 0 && hour <= 5) {
            return "Early morning";
        } else if (hour >= 6 && hour <= 12) {
            return "Morning";
        } else if (hour >= 13 && hour <= 18) {
            return "Afternoon";
        } else if (hour >= 19 && hour <= 23) {
            return "Evening";
        } else {
            return "Invalid hour";
        }
    }
}
