function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("miessan", "johndoe@gmail.com", false);

let value = addTwo(5);

loginUser("henri", "john@gmail.com");

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 ok";
// }

const getHello = (s: string): string => {
  return " ";
};

const heros = ["spiderman", "tortureNija", "ironman"];

heros.map((hero): string => {
  return `my heros are  ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): void {
  console.log(errmsg);
}

function getFavoriteNumber(): string {
  return "26";
}

function fail(msg: string): never {
  throw new Error(msg);
}
