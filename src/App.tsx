import React from "react";
import "./App.css";
import InputField from "./components/inputField";
// let name: string = "Pratyay";
// let age: number | string;
// let hobbies: string[];
// let tupleExample: [string, number] = ["role", 5];
// type Student = {
//   name: string;
//   age: number;
//   phonenumber?: number;
// };
// let checkFunction: (name: string) => number;
// //void returns undefined , void doesnt return undefined
// let student: Student = {
//   name: "Pratyay",
//   age: 22,
// };
// function printName(name: string) {
//   console.log(name);
// }
// let studnets: Student[];
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
