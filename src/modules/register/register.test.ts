import { request } from "graphql-request";
import { startServer } from "../../startServer";
import { User } from "../../entity/User";
import { duplicateEmail, emailNotLongEnough } from "./errorMessages";
import { AddressInfo } from "net";

let getHost = () => "";

beforeAll(async () => {
  const app = await startServer();
  const { port } = app.address() as AddressInfo;
  getHost = () => `http://127.0.0.1:${port}`;
});

const email = "bob@bob.com";
const password = "randompassword";

const mutation = (e: string, p: string) => `
mutation {
  register(email: "${e}", password: "${p}") {
    path
    message
  }
}
`;

test("Register user", async () => {
  const response = await request(getHost(), mutation(email, password));
  expect(response).toEqual({ register: null });
  const users = await User.find({ where: { email } });
  expect(users).toHaveLength(1);
  const user = users[0];
  expect(user.email).toEqual(email);
  expect(user.password).not.toEqual(password);

  // check for duplicate emails
  const response2: any = await request(getHost(), mutation(email, password));
  expect(response2.register).toHaveLength(1);
  expect(response2.register[0]).toEqual({
    path: "email",
    message: duplicateEmail
  });

  // catch bad email
  const response3: any = await request(getHost(), mutation("b", password));
  expect(response3.register).toHaveLength(1);
  expect(response3.register[0]).toEqual({
    path: "email",
    message: emailNotLongEnough
  });
});
