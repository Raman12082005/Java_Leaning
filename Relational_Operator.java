import java.util.*;
class Relational_Operator{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks of Maths: ");
        int Subject_01 = sc.nextInt();
	    System.out.print("Enter marks of Chemistry: ");
        int Subject_02 = sc.nextInt();
    	System.out.print("Enter marks Physics: ");
        int Subject_03 = sc.nextInt();

        // Relational operator check
        if (Subject_01 >= 33) {
            System.out.println("Student PASSED Maths");
        }else {
            System.out.println("Student has FAILED the exam, you have to give suplementry exam of Maths");
        }
	
	    if (Subject_02 >= 33) {
            System.out.println("Student has PASSED Chemistry");
        }else {
            System.out.println("Student has FAILED the exam, you have to give suplementry exam of Chemistry");
        }
        
	    if (Subject_03 >= 33) {
            System.out.println("Student has PASSED Physics");
        } else {
            System.out.println("Student has FAILED the exam, you have to give suplementry exam of Physics");
        }
    }
}
