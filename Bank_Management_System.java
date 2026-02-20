import java.util.*;
class Bank_Account{
	int accNo;
	String name;
	double balance;

	// default constructor
	Bank_Account(){
		this(0, "Not Assign", 0.0);
	}

	// Parameterised Constructor
	Bank_Account(int accNo, String name , double balance){
		this.accNo = accNo; // differentiate between instance and local variable
		this.name = name;
		this.balance = balance;
	}

	// return current object usinig chaining method
	Bank_Account deposite(double amount){
		balance += amount;
		return this;
	}

	Bank_Account withdraw(double amount){
		balance -= amount;
		return this;
	}

	// display account details
	void display(){
		System.out.println("Account no : " +accNo);
		System.out.println("Customer Name : " +name);
		System.out.println("Balance : " +balance);
	}
}
class Bank_Management_System{
	public static void main(String[] args){
		String name;
		int user_id;
		double Initial_Balance;

		Scanner sc = new Scanner(System.in);
        System.out.println("<------ INPUT ------->");
		System.out.print("Enter name : ");
		name = sc.next();
		System.out.print("Enter your id : ");
		user_id = sc.nextInt();
		System.out.print("Enter Initial Balance : ");
		Initial_Balance = sc.nextDouble();
        System.out.println("<------ OUTPUT ------->");
		
        System.out.println("User 1 : ");
		Bank_Account user1 = new Bank_Account(user_id, name, Initial_Balance);
		user1.display();

        Bank_Account user2 = new Bank_Account(user_id, name, Initial_Balance);
        int choice;
        double amount;
        do {
            System.out.println("\n1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Complete Transaction");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch(choice) {
                case 1:
                    System.out.print("Enter amount to deposit: ");
                    amount = sc.nextDouble();
                    user2 = user2.deposite(amount);   // chaining continues
                    break;

                case 2:
                    System.out.print("Enter amount to withdraw: ");
                    amount = sc.nextDouble();
                    user2 = user2.withdraw(amount);   // chaining continues
                    break;

                case 3:
                    System.out.println("Transaction Completed.");
                    break;

                default:
                    System.out.println("Invalid Choice!");
            }

        } while(choice != 3);
        System.out.println("User 2 : ");
        user2.display();

		Bank_Account user3 = new Bank_Account();
        System.out.println("User 3 : ");
		user3.display();

        // use of chaining
        Bank_Account user4 = new Bank_Account();
		user4.deposite(10000).withdraw(30000).deposite(15000).withdraw(25000);
        System.out.println("User 4 : ");
		user4.display();
	}
}