import java.util.*;

class Bitwise_Complement{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter 1st integer: ");
        int a = sc.nextInt();
	    System.out.print("Enter 2nd integer: ");
        int b = sc.nextInt();

        // String result = Integer.toBinaryString(a);
	    // System.out.print("Binary form : " +result);

	    System.out.print("Bitwise AND : " +(a & b)+ "\n");
	    System.out.print("Bitwise OR : " +(a | b) +"\n");
	    System.out.print("Bitwise XOR : " +(a ^ b)+ "\n");
	    System.out.print("Bitwise NOT : " +(~a) +"\n");
    }
}
