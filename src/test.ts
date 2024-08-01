import {UserSchema} from "./gen/example_pb";
import {create} from "@bufbuild/protobuf";

const user = create(UserSchema);

if (!user) {
  throw new Error("something went wrong");
} else {
  console.log("OK");
}
