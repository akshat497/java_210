// export default function Students() {
// //   let students = [
// //     {
// //       id: 1,
// //       name: "Aarav Sharma",
// //       age: 20,
// //       gender: "Male",
// //       course: "BCA",
// //       year: "2nd Year",
// //       email: "aarav.sharma@example.com",
// //       phone: "9876543201",
// //       city: "Delhi",
// //       marks: 82,
// //     },
// //     {
// //       id: 2,
// //       name: "Priya Verma",
// //       age: 21,
// //       gender: "Female",
// //       course: "MCA",
// //       year: "1st Year",
// //       email: "priya.verma@example.com",
// //       phone: "9876543202",
// //       city: "Rohtak",
// //       marks: 91,
// //     },
// //     {
// //       id: 3,
// //       name: "Rohan Mehta",
// //       age: 19,
// //       gender: "Male",
// //       course: "B.Tech",
// //       year: "1st Year",
// //       email: "rohan.mehta@example.com",
// //       phone: "9876543203",
// //       city: "Jaipur",
// //       marks: 76,
// //     },
// //     {
// //       id: 4,
// //       name: "Sneha Kapoor",
// //       age: 22,
// //       gender: "Female",
// //       course: "MBA",
// //       year: "2nd Year",
// //       email: "sneha.kapoor@example.com",
// //       phone: "9876543204",
// //       city: "Chandigarh",
// //       marks: 88,
// //     },
// //     {
// //       id: 5,
// //       name: "Aditya Singh",
// //       age: 20,
// //       gender: "Male",
// //       course: "B.Sc",
// //       year: "3rd Year",
// //       email: "aditya.singh@example.com",
// //       phone: "9876543205",
// //       city: "Lucknow",
// //       marks: 69,
// //     },
// //     {
// //       id: 6,
// //       name: "Kritika Arora",
// //       age: 21,
// //       gender: "Female",
// //       course: "BCA",
// //       year: "3rd Year",
// //       email: "kritika.arora@example.com",
// //       phone: "9876543206",
// //       city: "Noida",
// //       marks: 94,
// //     },
// //     {
// //       id: 7,
// //       name: "Yash Malhotra",
// //       age: 23,
// //       gender: "Male",
// //       course: "M.Tech",
// //       year: "1st Year",
// //       email: "yash.malhotra@example.com",
// //       phone: "9876543207",
// //       city: "Gurgaon",
// //       marks: 81,
// //     },
// //     {
// //       id: 8,
// //       name: "Neha Joshi",
// //       age: 20,
// //       gender: "Female",
// //       course: "BA",
// //       year: "2nd Year",
// //       email: "neha.joshi@example.com",
// //       phone: "9876543208",
// //       city: "Pune",
// //       marks: 74,
// //     },
// //     {
// //       id: 9,
// //       name: "Rahul Gupta",
// //       age: 22,
// //       gender: "Male",
// //       course: "B.Com",
// //       year: "3rd Year",
// //       email: "rahul.gupta@example.com",
// //       phone: "9876543209",
// //       city: "Mumbai",
// //       marks: 85,
// //     },
// //     {
// //       id: 10,
// //       name: "Ananya Rao",
// //       age: 19,
// //       gender: "Female",
// //       course: "BBA",
// //       year: "1st Year",
// //       email: "ananya.rao@example.com",
// //       phone: "9876543210",
// //       city: "Hyderabad",
// //       marks: 90,
// //     },
// //     {
// //       id: 11,
// //       name: "Kabir Khan",
// //       age: 21,
// //       gender: "Male",
// //       course: "BCA",
// //       year: "2nd Year",
// //       email: "kabir.khan@example.com",
// //       phone: "9876543211",
// //       city: "Bhopal",
// //       marks: 73,
// //     },
// //     {
// //       id: 12,
// //       name: "Simran Kaur",
// //       age: 20,
// //       gender: "Female",
// //       course: "MCA",
// //       year: "1st Year",
// //       email: "simran.kaur@example.com",
// //       phone: "9876543212",
// //       city: "Amritsar",
// //       marks: 87,
// //     },
// //     {
// //       id: 13,
// //       name: "Dev Patel",
// //       age: 22,
// //       gender: "Male",
// //       course: "B.Tech",
// //       year: "4th Year",
// //       email: "dev.patel@example.com",
// //       phone: "9876543213",
// //       city: "Ahmedabad",
// //       marks: 79,
// //     },
// //     {
// //       id: 14,
// //       name: "Ishita Nair",
// //       age: 21,
// //       gender: "Female",
// //       course: "B.Sc",
// //       year: "3rd Year",
// //       email: "ishita.nair@example.com",
// //       phone: "9876543214",
// //       city: "Kochi",
// //       marks: 92,
// //     },
// //     {
// //       id: 15,
// //       name: "Arjun Reddy",
// //       age: 23,
// //       gender: "Male",
// //       course: "MBA",
// //       year: "2nd Year",
// //       email: "arjun.reddy@example.com",
// //       phone: "9876543215",
// //       city: "Bengaluru",
// //       marks: 84,
// //     },
// //     {
// //       id: 16,
// //       name: "Pooja Mishra",
// //       age: 20,
// //       gender: "Female",
// //       course: "BA",
// //       year: "2nd Year",
// //       email: "pooja.mishra@example.com",
// //       phone: "9876543216",
// //       city: "Patna",
// //       marks: 71,
// //     },
// //     {
// //       id: 17,
// //       name: "Manav Choudhary",
// //       age: 24,
// //       gender: "Male",
// //       course: "M.Tech",
// //       year: "2nd Year",
// //       email: "manav.choudhary@example.com",
// //       phone: "9876543217",
// //       city: "Indore",
// //       marks: 89,
// //     },
// //     {
// //       id: 18,
// //       name: "Ritika Jain",
// //       age: 19,
// //       gender: "Female",
// //       course: "B.Com",
// //       year: "1st Year",
// //       email: "ritika.jain@example.com",
// //       phone: "9876543218",
// //       city: "Kanpur",
// //       marks: 95,
// //     },
// //     {
// //       id: 19,
// //       name: "Tanish Oberoi",
// //       age: 21,
// //       gender: "Male",
// //       course: "BBA",
// //       year: "3rd Year",
// //       email: "tanish.oberoi@example.com",
// //       phone: "9876543219",
// //       city: "Faridabad",
// //       marks: 78,
// //     },
// //     {
// //       id: 20,
// //       name: "Meera Iyer",
// //       age: 22,
// //       gender: "Female",
// //       course: "MCA",
// //       year: "2nd Year",
// //       email: "meera.iyer@example.com",
// //       phone: "9876543220",
// //       city: "Chennai",
// //       marks: 93,
// //     },
// //   ];
// let fruits=["apple","banana","guavava","pineapple","mango","grapes"]
//   return (
//     <>
//       {/* <table border={1}>
//         <thead>
//           {Object.keys(students[0]).map(function (value, index) {
//             return <th>{value}</th>;
//           })}
//         </thead>
//         <tbody>
//           {students.map(function (student) {
//             let values = [
//               student.id,
//               student.name,
//               student.age,
//               student.gender,
//               student.course,
//               student.year,
//               student.email,
//               student.phone,
//               student.city,
//               student.marks,
//             ];
//             return (
//               <tr>
//               {values.map(function(value){
//                 return <td>{value}</td>
//               })}
//                 {/* <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.age}</td>
//                 <td>{student.gender}</td>
//                 <td>{student.course}</td>
//                 <td>{student.year}</td>
//                 <td>{student.email}</td>
//                 <td>{student.phone}</td>
//                 <td>{student.city}</td>
//                 <td>{student.marks}</td> */}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table> */}
//     </>
//   );
// }
import React from 'react'

export default function Students() {
    let fruits=["apple","banana","guavava","pineapple","mango","grapes"]
  return (
    <>
        {
            fruits.map(function(fruit){
                return <div key={fruit}>
                    {fruit}
                </div>
            })
        }
    </>
  )
}
