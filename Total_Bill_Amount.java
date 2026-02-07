import java.util.*;
class Total_Bill_Amount{
	public static void main(String[] args){
		
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter Price of item_01 : ");
		int Item_01 = sc.nextInt();
		
		System.out.println("Enter Price of item_02 : ");
		int Item_02 = sc.nextInt();

		System.out.println("Enter Price of item_03 : ");
		int Item_03 = sc.nextInt();

		int Total_Price = Item_01 + Item_02 + Item_03;
		System.out.println("Total price : " +Total_Price);

	}
}