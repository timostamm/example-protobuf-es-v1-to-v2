import {User} from "./gen/example_pb";

const user = new User();

if (!user) {
  throw new Error("something went wrong");
} else {
  console.log("OK");
}
