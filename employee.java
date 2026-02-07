import java.util.*;

public class employee {

int emp_id;
String emp_name;
int emp_salary;


    void setdata() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter employee id: ");
        emp_id = sc.nextInt();

        System.out.print("Enter employee name: ");
        emp_name = sc.next();

        System.out.print("Enter employee salary: ");
        emp_salary = sc.nextInt();

    }

    void getdata() {

        System.out.println("Employee Id = " + emp_id);
        System.out.println("Employee Name = " + emp_name);
        System.out.println("Employee Salary = " + emp_salary);
	
float HRA = (emp_salary * 20) / 100;
float DA = (emp_salary * 10) / 100;
float Gross_Salary = emp_salary + HRA + DA;
System.out.println("Gross salary of employee = " + Gross_Salary);

    }

    public static void main(String[] args) {

employee e1 = new employee();
employee e2 = new employee();

e1.setdata();
e1.getdata();

e2.setdata();
e2.getdata();

    }
}