import { createContext, useReducer, useState } from "react";
import Students from "./content/Students";
import { Footer } from "./footer/Footer";
import { Header } from "./Header/Header";
import Login from "./Login/Login";

export const userContext = createContext();
export function App({ abc }) {
  

 
const [users, setusers] = useState([
    {
      id: 101,
      name: "Akshat Saini",
      email: "akshat@example.com",
      phone: "9876543210",
      membershipType: "Premium",
      borrowedBooks: [1, 3],
    },
    {
      id: 102,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9876543211",
      membershipType: "Basic",
      borrowedBooks: [2],
    },
    {
      id: 103,
      name: "Rahul Verma",
      email: "rahul@example.com",
      phone: "9876543212",
      membershipType: "Premium",
      borrowedBooks: [4, 5],
    },
    {
      id: 104,
      name: "Sneha Gupta",
      email: "sneha@example.com",
      phone: "9876543213",
      membershipType: "Basic",
      borrowedBooks: [],
    },
    {
      id: 105,
      name: "Amit Kumar",
      email: "amit@example.com",
      phone: "9876543214",
      membershipType: "Premium",
      borrowedBooks: [1],
    },
  ])

  const [books, setbooks] = useState([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      publishedYear: 1988,
      availableCopies: 5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self Help",
      publishedYear: 2018,
      availableCopies: 3,
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      genre: "Programming",
      publishedYear: 2008,
      availableCopies: 4,
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      publishedYear: 1997,
      availableCopies: 2,
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "Finance",
      publishedYear: 2020,
      availableCopies: 6,
    },
  ])
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case "increment":
        return state + 1;
        break;
      case "decrement":
        return state - 1;
        break;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);

  function issueBook(selectedBook,selectedUser) {
    console.log(selectedBook)
    console.log(selectedUser)
    let modifiedBooks=books.map((book) => {
      if (book.id == selectedBook && book.availableCopies>0) {
        book.availableCopies=book.availableCopies-1
        
      }else{
        alert("out of stokc")
        return
      }

      return book
      
    });
    let modifiedUsers=users.map((user) => {
      if (user.id == selectedUser) {
        user.borrowedBooks.push(selectedBook);
      }
      return user
    });
   
    setusers(modifiedUsers)
    setbooks(modifiedBooks)
  }

  console.log("modifiedusers",users)
  const [name, setname] = useState("neha");
  const [age, setage] = useState(26);
  return (
    <>
      <userContext.Provider
        value={{ name, age, state, dispatch, users, books,issueBook }}
      >
        <Header xyz={abc} />
        <Students />
        <Login />

        <Footer />
      </userContext.Provider>
    </>
  );
}
