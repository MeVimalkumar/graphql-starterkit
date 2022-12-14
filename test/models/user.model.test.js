const server = require("../../src/server");
const { faker } = require("@faker-js/faker");
const UserModel = require("../../src/models/user.model");

describe("User Model", () => {
  test("Should create new user", async () => {
    const user = {
      name: faker.name.fullName(),
      gender: faker.name.sex(),
    };
    const result = await new UserModel(user).save();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("_id");
  });
});
