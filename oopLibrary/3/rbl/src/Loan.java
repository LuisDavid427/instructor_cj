import java.time.LocalDate;

public class Loan {
    public Book book;
    public Reader reader;
    public LocalDate loanDate;
    public LocalDate returnDate;



    public Loan(Book book, Reader reader, LocalDate loanDate, LocalDate returnDate) {
        this.book = book;
        this.reader = reader;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
    }

    @Override
    public String toString() {
        return "Préstamo [Libro=" + book.title + ", Lector=" + reader.name +
               ", Fecha Préstamo=" + loanDate + ", Fecha Devolución=" + returnDate + "]";

    }
}