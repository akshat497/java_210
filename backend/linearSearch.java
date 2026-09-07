public class linearSearch {
    public static void main(String[] args) {

        // int arr[]={11,12,13,14,15,16,17,18,19,20};
        // int left=0;
        // int right=arr.length-1;
        // int searched=16;

        // while(left<=right){
        //     int mid=(left+right)/2;

        //     if (arr[mid]== searched){
        //         System.out.println("Element found at index: "+mid);
        //         return;

        //     }else if(arr[mid]<searched){
        //         left=mid+1;
        //     }else{
        //         right=mid-1;
        //     }
        // }
        // what is oops ? 
        // oops is object oriented programming system 
        // 1 encapsulation
        // 2 inheritance
        // 3 polymorphism
        // 4 abstraction
        class Human{
            String name;
            int age;
            String gender;

            void CreateHuman(String nameFromObj, int ageFromObj, String genderFromObj){
                this.name=nameFromObj;
                this.age=ageFromObj;
                this.gender=genderFromObj;
            }
            
        }
        Human obj1=new Human();
        Human obj2=new Human();
        obj1.CreateHuman("Akshat",21,"Male");
        obj2.CreateHuman("John",25,"Male");

        System.out.println("Name: "+obj1.name);
        System.out.println("Age: "+obj1.age);
        System.out.println("Gender: "+obj1.gender);

        System.out.println("Name: "+obj2.name);
        System.out.println("Age: "+obj2.age);
        System.out.println("Gender: "+obj2.gender);
        // a class is a blueprint of object
        // an object is an instance of class

        // int arr[]={22,11,44,2,6,90};
        // int searched=6;
        // int count=0;
        // for(int i=0; i<arr.length;i++){
        //     if(arr[i]==searched){
        //         System.out.println("Element found at index: "+i);
               
        //     }else{
        //         count++;
        //     }
        // }

        // if(count==arr.length){
        //     System.out.println("Element not found");
        // }
    }
    // binery search 
    // array must be sorted in ascending order 

}
