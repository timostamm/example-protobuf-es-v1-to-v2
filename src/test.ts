import {User as UserV1} from "./genv1/example_pb";

const userV1 = new UserV1();

if (!userV1) {
  throw new Error("something went wrong");
} else {
  console.log("OK");
}
