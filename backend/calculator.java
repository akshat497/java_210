import java.util.Scanner;

public class calculator {
    public static void main(String[] args) {

        // System.out.print("Enter first number: ");
        // int a = sc.nextInt();
        // System.out.print("Enter second number: ");
        // int b = sc.nextInt();
        // System.out.println("Addition = " + (a + b));
        // System.out.println("Subtraction = " + (a - b));
        // System.out.println("Multiplication = " + (a * b));
        // System.out.println("Division = " + (a / b));
        // System.out.println("Remainder = " + (a % b));
        // sc.close();
        // boolean correctUsername = false;
        // boolean correctPassword = false;
        // boolean login = correctUsername || correctPassword;
        // System.out.println(login);
        // int x = 10;

        // // System.out.println(x++ + ++x + x++ + ++x);
        // System.out.println(x++ );
        // System.out.println(x);

        // Scanner sc = new Scanner(System.in);
        // System.out.print("Enter number: ");
        // int a = sc.nextInt();
        // if (a % 2 == 0) {
        // System.out.println("Even");
        // } else {
        // System.out.println("Odd");
        // }
        // sc.close();

        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;

        }
        System.out.println(sum);

        // make a guess game with while loop in which user has to guess a number
        // between 1 to 100 and the program will tell if the guess is too high or
        // too low until the user guesses the correct number.will get 5 attempts

        Scanner sc = new Scanner(System.in);
        int attempt = 0;
        while (true) {
            if (attempt == 5) {
                System.out.println("You have reached the maximum number of attempts.");
                break;
            }
            System.out.println("Guess a number between 1 to 100: ");
            int guess = sc.nextInt();
            if (guess < 1 || guess > 100) {
                System.out.println("Please enter a number between 1 to 100");
                continue;
            }
            if (guess == 50) {
                System.out.println("Congratulations! You guessed the correct number.");
                break;
            } else if (guess < 50) {
                System.out.println("Too low! Try again.");
                attempt++;
            } else {
                System.out.println("Too high! Try again.");
                attempt++;
            }

        }
        sc.close();

    }

    // for(int i = 0; i <= 50; i++) {
    // if(i % 2!=0) {
    // System.out.println(i);
    // }
    // }

    // x++ value is 10, then x becomes 11. Then ++x increments x to 12 and returns
    // 12. So the expression evaluates to 10 + 12 + 13 = 35. After this line, x is
    // now 13.
}
