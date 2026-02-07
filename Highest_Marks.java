import java.util.*;

class Highest_Marks{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter marks of Maths of A: ");
        int Marks_A = sc.nextInt();

	System.out.print("Enter marks of Maths of B: ");
        int Marks_B = sc.nextInt();

        // Terniary Operator
        String result = Marks_A > Marks_B ? "Marks of A is greater than B" : "Marks of B is greater than A";
	System.out.print(result);

    }

}