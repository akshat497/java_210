
import java.util.ArrayList;
import java.util.Scanner;

public class LibraryManagement {

    static class Book {
        private int bookId;
        private String name;
        private String authorName;
        private boolean isIssued;

        public Book(int bookId, String name, String authorName) {
            this.bookId = bookId;
            this.name = name;
            this.authorName = authorName;
            this.isIssued = false;
        }

        public int getBookId() {
            return bookId;
        }

        public String getBookName() {
            return name;
        }

        public String getAuthorName() {
            return authorName;
        }

        public boolean getissued() {
            return isIssued;
        }

        // issue books
        public void issueBook() {
            isIssued = true;
        }

        public void returnBook() {
            isIssued = false;
        }

        public void displayBook() {
            System.out.println("BookId" + bookId);
            System.out.println("BookName" + name);
            System.out.println("AuthorName" + authorName);

            if (isIssued) {
                System.out.println("Status: issued");

            } else {
                System.out.println("Status: Available");
            }
            System.out.println("==================================");

        }

    }

    static class Library {
        private ArrayList<Book> books = new ArrayList<>();

        public void addBook(Book book) {
            books.add(book);
            System.out.println("Book added successfully");
        }

        public void displayBooks() {
            if (books.isEmpty()) {
                System.out.println("no Books");
                return;

            }
            for (Book book : books) {
                book.displayBook();
            }
        }
        public void searchBook(int Bookid){
            for(Book book:books){
                if(book.getBookId() == Bookid){
                    book.displayBook();
                    return;
                }
            }
            System.out.println("Book not found");
        }
        public void issueBook(int IssueId){
            for(Book book:books){
                if(book.getBookId() == IssueId){
                    if(book.getissued()){
                        System.out.println("Book is already issued");
                    }else{
                        book.issueBook();
                        System.out.println("Book issued successfully");
                    }
                    return;
                }
            }
            System.out.println("Book not found");
        }
    }

    public static void main(String[] args) {
        // to add a book
        // to delete a book
        // display all books
        // search book
        // return book
        // total books
        // available books
        // exit
        Scanner sc = new Scanner(System.in);
        Library library = new Library();// create a library object
        int choice;

        do {
            System.out.println("1. Add Book");
            System.out.println("2. Display All Books");
            System.out.println("3. Search Book");
            System.out.println("4. Issue Book");
            System.out.println("5. Return Book");
            System.out.println("6. Delete Book");
            System.out.println("7. Available Book");
            System.out.println("8. Total Book");
            System.out.println("9. Exit");

            System.out.println("Enter your choice");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.println("Enter BookId");
                    int id = sc.nextInt();
                    sc.nextLine();
                    System.out.println("Enter Book Name");
                    String name = sc.nextLine();
                    System.out.println("Enter Author Name");
                    String AuthorName = sc.nextLine();
                    Book book = new Book(id, name, AuthorName);
                    library.addBook(book);
                    break;
                case 2:
                    library.displayBooks();
                    break;
                case 3:
                    System.out.println("Enter bookid to search");
                    int searchId = sc.nextInt();
                    library.searchBook(searchId);
                    break;
                case 4:
                    System.out.println("Enter BookId to issue");
                    int issueId = sc.nextInt();
                    library.issueBook(issueId);
                    break;

                default:
                    break;
            }
        } while (choice != 9);

    }

}
