import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App3 {
    static List<Reader> readers = new ArrayList<>();
    static List<Book> books = new ArrayList<>();
    static List<Loan> loans = new ArrayList<>();
    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        int opcion = 0;
        do {
            System.out.println("Sistema de biblioteca");
            System.out.println("1. Registrar lector");
            System.out.println("2. Registrar libro");
            System.out.println("3. Registrar prestamo");
            System.out.println("4. Listar libros");
            System.out.println("5. Listar lectores");
            System.out.println("6. Listar prestamos");
            
            System.out.println("7. salir");
            opcion = scan.nextInt();
            scan = new Scanner(System.in);
            switch (opcion) {
                case 1:
                    registerReader();
                    break;
                case 2:
                    registerBook();
                    break;
                case 3:
                    registerLoan();
                    break;
                case 4:
                    getListBooks();
                    break;
                case 5:
                    getListReaders();
                    break;
                case 6:
                    getListLoans();
                    break;

                default:
                    System.out.println("Opción no valida");
                    break;
            }

        } while (opcion != 7);
        System.out.println("chao");
    }

    public static void registerReader() {
        Reader reader = new Reader();
        boolean nCarnetExis;
        String nCarnet;
        do{
        System.out.println("Ingrese la información del lector");
        System.out.println("nombre");
        reader.name = scan.nextLine();
        System.out.println("email");
        reader.email = scan.nextLine();
        System.out.println("isbn");
        nCarnet = scan.nextLine();
        nCarnetExis= false;
        for(Reader b : readers){
            if(b.nCarnet.equalsIgnoreCase(nCarnet)){
                System.out.println("ya hay un numero de lector registrado");
                nCarnetExis= true;
                break;
            }
        }
        }while(nCarnetExis);
        reader.nCarnet = nCarnet;
        readers.add(reader);
    }

    public static void registerBook() {
        Book book = new Book();
        boolean isbnExistente;
        String isbn;
        do{
        System.out.println("Ingrese la información del libro");
        System.out.println("Titulo");
        book.title = scan.nextLine();
        System.out.println("Autor");
        book.author = scan.nextLine();
        
        System.out.println("ISBN:");
        isbn = scan.nextLine();
        isbnExistente = false;
        for (Book b : books) {
            if (b.isbn.equalsIgnoreCase(isbn)) {
                System.out.println("Error: Ya existe un libro con ese ISBN.");
                isbnExistente = true;
                break;
            }
        }
        } while (isbnExistente);
        book.isbn = isbn;

        System.out.println("Fecha de publicación (AAAA-MM-DD):");
        book.publicationDate = LocalDate.parse(scan.nextLine());

        System.out.println("Género:");
        book.genere = scan.nextLine();

        books.add(book);
    }

    public static void registerLoan() {
        if (books.isEmpty() || readers.isEmpty()) {
            System.out.println("Debes registrar al menos un libro y un lector antes de hacer un préstamo.");
            return;
        }

        System.out.println("Selecciona un libro");
        getListBooks();
        System.out.print("Elige el número del libro: ");
        int bookIndex = scan.nextInt() - 1;

        System.out.println("Selecciona un lector");
        getListReaders();
        System.out.print("Elige el número del lector: ");
        int readerIndex = scan.nextInt() - 1;
        scan.nextLine();

        System.out.print("Fecha de préstamo (AAAA-MM-DD): ");
        LocalDate loanDate = LocalDate.parse(scan.nextLine());

        System.out.print("Fecha esperada de devolución (AAAA-MM-DD): ");
        LocalDate returnDate = LocalDate.parse(scan.nextLine());

        Loan loan = new Loan(books.get(bookIndex), readers.get(readerIndex), loanDate, returnDate);
        loans.add(loan);
        System.out.println("Préstamo registrado.");
    }

    public static void getListBooks() {
        for (int i = 0; i < books.size(); i++) {
            System.out.println(books.get(i).toString());
        }
        if (books.size() == 0) {
            System.out.println("No hay libros registrados");
        }
    }

    public static void getListReaders() {
        for (int i = 0; i < readers.size(); i++) {
            System.out.println(readers.get(i).toString());
        }
        if (readers.size() == 0) {
            System.out.println("No hay lectores registrados");
        }
    }

    public static void getListLoans() {
        for (int i = 0; i < loans.size(); i++) {
            System.out.println(loans.get(i).toString());
        }
        if (loans.size() == 0) {
            System.out.println("No hay préstamos registrados");
        }
    }

}
