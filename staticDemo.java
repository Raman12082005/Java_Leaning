class Student{
	static int Studentcount = 0; // static variable
	String name;
	
	//contructor
	Student(String n){
		name = n;
		Studentcount++;
	}
	
	void display(){
		System.out.println("Student name :" +name);
	}
	// to show total no. of Students
	static void showcount(){
		System.out.println("Total no. of Students :" +Studentcount);
	}
}

// bank class
class Bank{
	static double getIntrestrate(){
		// fixed intrest
		return 7.5;
	}
}

// Main class
public class staticDemo{
	static {
		System.out.println("Static Block is executed before the main method");
	}
	public static void main(String[] args){
		// student Object
		Student s1 = new Student("Raman");
		s1.display();
		Student.showcount();

		Student s2 = new Student("Manav");
		s2.display();
		Student.showcount();

		System.out.println("Bank fixed intrest rate : " + Bank.getIntrestrate() +"%");
	}
}