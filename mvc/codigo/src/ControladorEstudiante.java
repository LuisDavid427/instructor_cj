public class ControladorEstudiante {
    private Estudiante modelo;
    private VistaEstudiante vista;

    public ControladorEstudiante(Estudiante modelo, VistaEstudiante vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    public void actualizarVista() {
        vista.mostrarEstudiante(modelo.getNombre(), modelo.getEdad());
    }

    public void setNombreEstudiante(String nombre) {
        modelo.setNombre(nombre);
    }

    public void setEdadEstudiante(int edad) {
        modelo.setEdad(edad);
    }
}
