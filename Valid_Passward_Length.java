import java.util.*;
class Valid_Passward_Length{
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Passward: ");
        String Passward = sc.nextLine();

        if(Passward.length() > 10){
        System.out.print("Your Passward is invalid");
        }
        else{
        System.out.print("Passward - " +Passward);
        }
    }
}