// class bankBalance {

//     private double balance = 2000;

//     int addbalance(int accountNumber, double amount) {
//         // Logic to add balance to the account
//         if (accountNumber == 12345) { // Example account number check
//             balance += amount;
//             return (int) balance; // Success
//         } else {
//             System.out.println("Invalid account number");
//             return (int) balance; // Failure
//         }

//     }
// }
class bankBalance{
    private double balance=2000;
    private double accountNumber= 123945;
    private String accountHolderName= "John Doe";
    private int pin=1234;

    int addbalance(double accountNumber, double amount, int pin) {
        // Logic to add balance to the account
        if (this.accountNumber == accountNumber && this.pin == pin) { // Example account number and PIN check
            balance += amount;
            return (int) balance; // Success
        } else {
            System.out.println("Invalid account number or PIN");
            return 0; // Failure
        }

    }
    int widrawbalance(double accountNumber, double amount, int pin ) {
        // Logic to withdraw balance from the account
        if (this.accountNumber == accountNumber && this.pin == pin) { // Example account number and PIN check
            if (balance >= amount) {
                balance -= amount;
                return (int) balance; // Success
            } else {
                System.out.println("Insufficient balance");
                return (int) balance; // Failure
            }
        } else {
            System.out.println("Invalid account number or PIN");
            return (int) balance; // Failure
        }

    }
    int getbalance(double accountNumber, int pin) {
        // Logic to get balance of the account
        if (this.accountNumber == accountNumber && this.pin == pin) { // Example account number and PIN check
            return (int) balance; // Success
        } else {
            System.out.println("Invalid account number or PIN");
            return (int) balance; // Failure
        }

    }
    String getaccountHolderName(double accountNumber, int pin) {
        // Logic to get account holder name
        if (this.accountNumber == accountNumber && this.pin == pin) { // Example account number and PIN check
            return this.accountHolderName; // Example account holder name
        } else {
            System.out.println("Invalid account number or PIN");
            return null; // Failure
        }

    }
}
public class accessmodifier {

    public static void main(String[] args) {
        bankBalance obj3 = new bankBalance();
        // System.out.println("Balance of obj3: " + obj3.addbalance(123945, 1000, 1234)); // Assuming 1234 is the correct PIN
        System.out.println("Balance of obj3 after withdrawal: " + obj3.widrawbalance(123945, 500, 1234)); // Assuming 1234 is the correct PIN
        // bankBalance obj3 = new bankBalance();
        // System.out.println("Balance of obj3: " + obj3.addbalance(123945, 1000));

    }
}
