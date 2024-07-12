// const User = {
//   name: "henri",
//   email: "miessanhenri@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "john", isPaid: true });

// function createCourse(): { name: string; price: number } {
//   return {
//     name: "french",
//     price: 399,
//   };
// }

// // type aliase

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User):User {
//   return { name: " ", email: " ", isActive: true };
// }
// createUser({ name: " ", email: " ", isActive: true });

// keyword, questionmark

// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   creditCard?: number;
// };

// let myUser: User = {
//   _id: "12343",
//   name: "henri",
//   email: "miessanhenri@gmail.com",
//   isActive: false,
// };

// myUser.email = "henri@gmail.com";

// type cardNumber = {
//   cardnumber: string;
// };

// type cardDate = {
//   cardDate: string;
// };

// type cardDetails = cardNumber &
//   cardDate &
//   cardDate & {
//     cvv: number;
//   };
