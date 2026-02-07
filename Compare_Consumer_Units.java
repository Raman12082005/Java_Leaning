import java.util.*;

class Compare_Consumer_Units{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter consumer units of A: ");
        int unitsA = sc.nextInt();

        System.out.print("Enter consumer units of B: ");
        int unitsB = sc.nextInt();

        if (unitsA > unitsB) {
            System.out.println("Consumer A has more units than Consumer B");
        }
        else if (unitsA < unitsB) {
            System.out.println("Consumer B has more units than Consumer A");
        }
        else {
            System.out.println("Both consumers have equal units");
        }
    }
}
