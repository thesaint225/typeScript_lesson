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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {}
createUser({ name: " ", email: " ", isActive: true });
