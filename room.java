import java.util.*;
public class room {

    int room_no;    
    String room_type;
    String room_area;
    String ac;

    void setdata() {
        Scanner sc = new Scanner(System.in);

        int choice1;

        System.out.println("\n===== ROOM TYPE SELECTION MENU =====");
        System.out.println("1. luxury");
        System.out.println("2. delux");
        System.out.println("3. Ordinary");
        System.out.println("4. Exit");
        System.out.print("Enter your choice: ");
        choice1 = sc.nextInt();

        switch (choice1) {

            case 1:
                room_type = "luxury";
                room_no = 3;
                room_area = "144 sq foot";
                System.out.println("You selected Luxury Room");
                break;
            case 2:
                room_type = "Delux";
                room_no = 15;
                room_area = "90 sq foot";
                System.out.println("You selected Delux Room");
                break;
            case 3:
                room_type = "Ordinary";
                room_no = 28;
                room_area = "42 sq foot";
                System.out.println("You selected Ordinary Room");
                break;
            case 4:
                System.out.println("Exiting room selection.");
                break;
        }

        int choice2;
        System.out.println("Select room for AC/ non AC");
        System.out.println("1. AC");
        System.out.println("2. Non AC");
        choice2 = sc.nextInt();

        switch(choice2){
            case 1:
                ac = "YES";
                break;
            case 2:
                ac = "NO";
                break;
            default:
                System.out.println("Non selected");
                break;
        }
        
    }

    void getdata() {
        System.out.println("<------ About your Room ----->");
        System.out.println("Room no = " + room_no);
        System.out.println("Room type = " + room_type);
        System.out.println("Room area = " + room_area);
        System.out.println("Room has AC = " + ac);
    }

    public static void main(String[] args) {

        room r1 = new room();
        room r2 = new room();

        r1.setdata();
        r1.getdata();
    }
}


