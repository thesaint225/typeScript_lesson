const User = {
  name: "henri",
  email: "miessanhenri@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "john", isPaid: true });

function createCourse(): { name: string; price: number } {
  return {
    name: "french",
    price: 399,
  };
}
