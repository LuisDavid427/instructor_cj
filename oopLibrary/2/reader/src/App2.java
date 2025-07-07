import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App2 {
    static List<Reader> readers = new ArrayList<>();
    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        int opcion = 0;
        do {
            System.out.println("Sistema de biblioteca");
            System.out.println("1. Registrar lector");
            System.out.println("2. Listar lectores");
            System.out.println("5. salir");
            opcion = scan.nextInt();
            scan = new Scanner(System.in);
            switch (opcion) {
                case 1:
                    registerReader();
                    break;
                case 2:
                    getListReaders();
                    break;

                default:
                    System.out.println("Opción no valida");
                    break;
            }

        } while (opcion != 5);
        System.out.println("chao");
    }

    public static void registerReader() {
        Reader reader = new Reader();
        System.out.println("Ingrese la información del lector");
        System.out.println("nombre");
        reader.name = scan.nextLine();
        System.out.println("email");
        reader.email = scan.nextLine();
        System.out.println("nCarnet:");
        reader.nCarnet = scan.nextLine();

        readers.add(reader);
    }

    public static void getListReaders() {
        for (int i = 0; i < readers.size(); i++) {
            System.out.println(readers.get(i).toString());
        }
        if (readers.size() == 0) {
            System.out.println("No hay lectores registrados");
        }
    }
}