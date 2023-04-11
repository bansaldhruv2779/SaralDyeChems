const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  subCategory: {
    type: Array({ name: { type: String, default: "" }, types: { type: Array, default: [] }, description: {type: String, default: ""} }),
    default: [],
  },
  image: { type: String, default: "" },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

exports.Product = mongoose.model("Product", productSchema);
