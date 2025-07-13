public class Main {
    public static void main(String[] args) {
        Estudiante modelo = new Estudiante("Luis David", 17);
        VistaEstudiante vista = new VistaEstudiante();
        ControladorEstudiante controlador = new ControladorEstudiante(modelo, vista);

        // Muestra datos iniciales
        controlador.actualizarVista();

        // Modifica datos desde el controlador
        controlador.setNombreEstudiante("David Conde");
        controlador.setEdadEstudiante(18);

        // Muestra los datos actualizados
        controlador.actualizarVista();
    }
}
