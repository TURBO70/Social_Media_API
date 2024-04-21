const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
  caption: {
    type: String,
    required: [true, "caption is required"],
  },
  likes: {
    type: Array,
    default: [],
  },
  comments: {
    type: Array,
    default: [],
  },
});

// userSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.comparePassword = async function (canditatePassword) {
//   const isMatch = await bcrypt.compare(this.password, canditatePassword);
//   return isMatch;
// };

module.exports = mongoose.model("Post", postSchema);
