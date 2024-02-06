const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, "inventory type require"],
        enum: ["in", "out"],
    },
    bloodGroup: {
        type: String,
        required: [true, "blood group is require"],
        enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
        type: Number,
        require: [true, "blood quanity is require"],
    },
    email: {
        type: String,
        required: [true, "Donar Email is Required"],
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "organisation is required"],
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === "out";
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === "in";
        },
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Inventory", inventorySchema);




// "inventoryType":"in",
// "bloodGroup": "O+",
// "quantity":"20",
// "email":

// 65c0ac7de07681bf2cf66b37