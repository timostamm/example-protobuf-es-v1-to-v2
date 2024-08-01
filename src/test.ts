import {User as UserV1} from "./genv1/example_pb";
import {UserSchema} from "./gen/example_pb";
import {create} from "@bufbuild/protobuf";

const userV1 = new UserV1();
const user = create(UserSchema);

if (!userV1 || !user) {
  throw new Error("something went wrong");
} else {
  console.log("OK");
}
