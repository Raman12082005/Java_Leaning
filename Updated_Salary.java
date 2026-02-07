import java.util.*;

class Updated_Salary{
	public static void main(String[] args)
{
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Employee Salary : ");
		int Salary = sc.nextInt();
		
		System.out.print("Enter Working hrs last week : ");
		int Working_hrs = sc.nextInt();

		
		if(Working_hrs >= 180){
			Salary = Salary + (Salary * 15)/100;
			System.out.println("Salary is increased to : " +Salary);
		}
		else{
			System.out.println("Working hours are low, so salary is not increased");
			System.out.println("Salary : " +Salary);

		}
	}
}