import java.util.*;import java.util.*;

class Decrement_Operator{
	public static void main(String[] args){

		Scanner scn = new Scanner(System.in);

		System.out.print("Enter Balance of your account : ");
		int Balance = scn.nextInt();
		
		System.out.print("Enter the no. of items : ");
                int items = scn.nextInt();
                		
		System.out.print("Enter cost of each item : ");
		int cost = scn.nextInt();
                
                int total = items*cost;
                if(total < Balance){
                        System.out.println("The customer can buy the items ");
                }
	
		else{
			while(total > Balance){
				items--;
				total = items * cost;
			}
			System.out.println("The customer can buy : " + items +" items only");
		}
		
	}
}