class UserAccount {
    public int userID;
    public String username;
    public String password;

    // Private Constructor (Prevents object creation without credentials)
    private UserAccount() {
        System.out.println("\nPrivate constructor called.");
        System.out.println("You cannot create object without credentials.");
    }

    // Parameterized Constructor
    private UserAccount(int id, String uname, String pass) {
        userID = id;
        username = uname;
        password = pass;

        System.out.println("\nUser Account Initialized Successfully!");
        System.out.println("UserID: " + userID);
        System.out.println("Username: " + username);
    }

    // Copy Constructor
    public UserAccount(UserAccount u) {
        userID = u.userID;
        username = u.username;
        password = u.password;

        System.out.println("\nDuplicate User Account Created!");
        System.out.println("UserID: " + userID);
        System.out.println("Username: " + username);
    }

    public static void main(String[] args) {
        System.out.println("Creating first user using parameterized constructor:");

        // Creating object using parameterized constructor
        UserAccount user1 = new UserAccount(101, "Ramandeep", "pass123");

        System.out.println("\nCreating second user using copy constructor:");

        // Creating duplicate object using copy constructor
        UserAccount user2 = new UserAccount(user1);

        // A private constructor can be called inside the class
        UserAccount user3 = new UserAccount();
    }
}



// Number of constructors =
// Number of methods that:

// ✔ Have the same name as the class
// ✔ Have NO return type (not even void)
