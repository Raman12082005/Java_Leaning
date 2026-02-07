import java.util.*;

public class Hotel {

String Hotel_name = "B.R. Hotel";
int room_no;
String room_type;
int rent_per_day;
int no_of_days_to_stay;

    void setdata() {
    Scanner sc = new Scanner(System.in);

	System.out.print("Enter no of days stayed: ");
        no_of_days_to_stay = sc.nextInt();

    int choice;

    System.out.println("\n===== ROOM TYPE SELECTION MENU =====");
    System.out.println("1. luxury");
    System.out.println("2. delux");
    System.out.println("3. Ordinary");
    System.out.println("4. Exit");
    System.out.print("Enter your choice: ");
    choice = sc.nextInt();

    switch (choice) {

        case 1:
            room_type = "luxury";
            System.out.println("You selected Luxury Room");
		    rent_per_day = 10000;
		    room_no = 10;
            break;
        case 2:
            room_type = "Delux";
            System.out.println("You selected Delux Room");
		    rent_per_day = 80000;
		    room_no = 5;
            break;
        case 3:
            room_type = "Ordinary";
            System.out.println("You selected Ordinary Room");
		    rent_per_day = 50000;
		    room_no = 3;
            break;
        case 4:
            System.out.println("Exiting room selection.");
            break;
    }
}
void getdata() {

    System.out.println("Hotel name = " + Hotel_name);
    System.out.println("Room no. = " + room_no);
    System.out.println("Room type = " + room_type);
	System.out.println("rent per day = " + rent_per_day);
	System.out.println("no of days you stayed = " + no_of_days_to_stay);
	
    float total_bill = rent_per_day * no_of_days_to_stay;
    System.out.println("total Bill = " + total_bill);
}
public static void main(String[] args) {
    Hotel h1 = new Hotel();
    h1.setdata();
    h1.getdata();
}
}