const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlenght: [3, "Too short user name"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Name is required"],
    minlenght: [3, "Too short password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(this.password, canditatePassword);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
