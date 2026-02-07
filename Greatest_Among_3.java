import java.util.*;
class Greatest_Among_3{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter 1st Integer: ");
        int int_01 = sc.nextInt();

        System.out.print("Enter 2nd Integer: ");
        int int_02 = sc.nextInt();

        System.out.print("Enter 3rd Integer: ");
        int int_03 = sc.nextInt();

        if(int_01>int_02){
            if(int_01>int_03){
                System.out.print("Integer 1st is greatest : "+int_01);
            }
            else{
                System.out.print("Integer 3rd is greatest : "+int_03);
            }
        }
        else{
            if(int_02>int_03){
                System.out.print("Integer 2nd is greatest : "+int_02);

            }
            else{
                System.out.print("Integer 3rd is greatest : "+int_03);
            }
        }
    }
}