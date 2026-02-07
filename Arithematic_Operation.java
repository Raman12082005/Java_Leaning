import java.util.*;

class Arithematic_Operation{
	public static void main(String[] args)
{
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter Initial Balance of your acoount : ");
		int Initial_Balance = sc.nextInt();
		
		System.out.println("Enter amount you credited: ");
		int amount_credit = sc.nextInt();

		System.out.println("Enter amount debited : ");
		int amount_debit = sc.nextInt();


		System.out.println("Balance in acount: " +Initial_Balance);

		Initial_Balance += amount_credit;
		System.out.println("Balance after credit: " +Initial_Balance);

		Initial_Balance -= amount_debit;
		System.out.println("Balance after debit: " +Initial_Balance);


	}
}