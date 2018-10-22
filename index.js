const dynogels = require("dynogels-promisified");
const Joi = require("joi");

const userExample = async () => {
  const User = dynogels.define("User", {
    hashKey: "userId",
    timestamps: true,
    schema: {
      "userId": dynogels.types.uuid(),
      name: Joi.string(),
      age: Joi.number()
    }
  });

  try {
    const resp = await dynogels.createTables()
    console.log(resp)

    console.log(await User.createAsync({name: "brian", age: 40}));
  } catch (e) {
    console.error(e);
  }
};

(async () => {
  await userExample();
})();
