import java.util.*;
class Voting_Elegibility{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter the age :");
		int age = sc.nextInt();

		// Using Relational Operator
		if(age >= 18){
			System.out.println("Elegible for votting");
		}
		else{
			System.out.println("Not Eligible for votting");
		}
	}
}