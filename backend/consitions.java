public class consitions {
    public static void main(String[] args) {

        // int age=14;
        // if(age>=18){
        // System.out.println("adult");
        // }else{
        // System.out.println("not adult");
        // }

        // }

        // for loop statring point then condition and increment

        // for (int i = 0; i <= 3; i = i + 1) {

        // for (int j = 0; j <= i; j++) {
        // if (j == 3) {
        // System.out.println("inside for j condition ");
        // break;

        // }
        // System.out.println("inside for j ");
        // }
        // System.out.println("inside for i \n");

        // }

        // for (int i = 5; i >= 0; i--) {

        // for (int j = 0; j <= i; j++) {

        // System.out.print("*");
        // }

        // System.out.print("\n");

        // }

        for (int i = 5; i >= 0; i--) {

            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }
            for (int j = 5; j >= i; j--) {
                System.out.print("*");
            }

            System.out.print("\n");

        }

    }

}
