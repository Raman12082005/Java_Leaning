import java.util.Scanner;
public class Library {

    int member_id;
    String member_name;
    int book_issue;

    // Inner Book class
    class Book {

        String book1_name = "Jungle Book";
        int book1_price = 1200;
        String book1_author = "Rudyard Kipling";

        String book2_name = "Bitcoin";
        int book2_price = 2500;
        String book2_author = "Satoshi Nakamoto";

        void showBookDetails() {
            Scanner sc = new Scanner(System.in);

            System.out.println("1. Jungle Book");
            System.out.println("2. Bitcoin");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Book Name : " + book1_name);
                    System.out.println("Author    : " + book1_author);
                    System.out.println("Price     : " + book1_price);
                    break;

                case 2:
                    System.out.println("Book Name : " + book2_name);
                    System.out.println("Author    : " + book2_author);
                    System.out.println("Price     : " + book2_price);
                    break;

                default:
                    System.out.println("Invalid choice");
            }
        }
    }

    // Method to take input
    void setData() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter member id: ");
        member_id = sc.nextInt();

        System.out.print("Enter member name: ");
        member_name = sc.next();

        // Initial books issued
        if (member_id == 1104)
            book_issue = 2;
        else if (member_id == 1106)
            book_issue = 1;
        else
            book_issue = 0;

        System.out.println("1. Issue Book");
        System.out.println("2. Return Book");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                book_issue++;
                Book b1 = new Book();
                b1.showBookDetails();
                break;

            case 2:
                if (book_issue > 0)
                    book_issue--;
                else
                    System.out.println("No books to return");
                break;

            default:
                System.out.println("Invalid choice");
        }
    }

    // Method to display data
    void getData() {
        System.out.println("\n--- Member Details ---");
        System.out.println("Member ID           : " + member_id);
        System.out.println("Member Name         : " + member_name);
        System.out.println("Books Issued        : " + book_issue);
    }

    // Main method
    public static void main(String[] args) {

        Library l1 = new Library();
        l1.setData();
        l1.getData();
    }
}
