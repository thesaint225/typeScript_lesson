interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

const john: User = {
  dbId: 22,
  email: "ga@gmail.com",
  userId: 2211,
  startTrial: () => {
    return "trail started";
  },
};
