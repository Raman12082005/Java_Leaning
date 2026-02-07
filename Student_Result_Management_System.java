import java.util.Scanner;
class Student_Result_Management_System_02{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int choice;
        do{
            System.out.println("\n===== STUDENT RESULT MANAGEMENT SYSTEM =====");
            System.out.println("1. Enter Student Result");
            System.out.println("2. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    // Input marks
                    System.out.print("Enter marks of Maths: ");
                    int Maths = sc.nextInt();
                    System.out.print("Enter marks of Physics: ");
                    int Physics = sc.nextInt();
                    System.out.print("Enter marks of Chemistry: ");
                    int Chemistry = sc.nextInt();
                    System.out.print("Enter marks of Biology: ");
                    int Biology = sc.nextInt();
                    System.out.print("Enter marks of English: ");
                    int English = sc.nextInt();

                    // Total & Average
                    int Total_Marks = Maths + Physics + Chemistry + Biology + English;
                    int Average_Marks = Total_Marks / 5;

                    // Display total & average
                    System.out.println("\nTotal Marks: " + Total_Marks + " / 500");
                    System.out.println("Average Marks: " + Average_Marks);

                    // Pass/Fail for each subject
                    System.out.println("\n--- Subject Result ---");
                    System.out.println("Maths: " + (Maths >= 33 ? "Pass" : "Fail"));
                    System.out.println("Physics: " + (Physics >= 33 ? "Pass" : "Fail"));
                    System.out.println("Chemistry: " + (Chemistry >= 33 ? "Pass" : "Fail"));
                    System.out.println("Biology: " + (Biology >= 33 ? "Pass" : "Fail"));
                    System.out.println("English: " + (English >= 33 ? "Pass" : "Fail"));

                    // Grade calculation
                    System.out.print("\nGrade: ");
                    if (Average_Marks >= 90) {
                        System.out.println("A");
                    } else if (Average_Marks >= 80) {
                        System.out.println("B");
                    } else if (Average_Marks >= 70) {
                        System.out.println("C");
                    } else if (Average_Marks >= 50) {
                        System.out.println("D");
                    } else if (Average_Marks >= 33) {
                        System.out.println("E");
                    } else {
                        System.out.println("F");
                    }
                    break;
                case 2:
                    System.out.println("Exiting program. Thank you!");
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }while (choice != 2);
    }
}
