const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Name"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter an Email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please Enter A password"],
    minlength: [6, "password must be at least 6 characters"],
    select: false,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
