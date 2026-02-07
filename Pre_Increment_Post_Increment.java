import java.util.*;

class Pre_Increment_Post_Increment{
	public static void main(String[] args){
        System.out.println("Enter the marks of student : ");
		Scanner scn = new Scanner(System.in);
        int Roll_No = scn.nextInt();
		int Student1 = Roll_No++;
		int Student2 = ++Roll_No;

		System.out.println("Student! Roll_no. : " +Student1);
		System.out.println("Student2 Roll_no. : " +Student2);
	}
}