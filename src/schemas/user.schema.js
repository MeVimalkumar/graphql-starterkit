const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    gender: {
      type: String,
      trim: true,
      required: true,
      enum: ["male", "female"],
      default: "male",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
