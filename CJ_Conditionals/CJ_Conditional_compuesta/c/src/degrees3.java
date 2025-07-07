public class degrees3 {
    /* 
    Temperatura adecuada: Pide una temperatura y muestra si hace frío 
    (menor a 15), normal (15 a 30) o calor (mayor a 30).
    */
    int degrees=30;
    public String mDegrees() {

        if (degrees < 15) {
            return ("frio");
        } 
        else if (degrees >= 15 && degrees <= 30) {

            return("normal");
        }
        else{
            return("calor");
    }
}
}

