const mongoose = require("mongoose");

main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/relation");
}

const orderSchema = new mongoose.Schema({
    item: String,
    pricing: Number,
});

const custSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", custSchema);

const addCustomer = async () => {
    // Fetch existing orders
    let order1 = await Order.findOne({ item: "Laptop" });
    let order2 = await Order.findOne({ item: "Mobile" });

    if (order1 && order2) {
        let newCustomer = new Customer({
            name: "John Doe",
            orders: [order1._id, order2._id],
        });

        const res = await newCustomer.save();
        console.log(res);
    } else {
        console.log("Orders not found");
    }
};

addCustomer();

/*
const addOrder = async () => {
  let res = await Order.insertMany([
    { item: "Laptop", pricing: 1000 },
    { item: "Mobile", pricing: 500 },
    { item: "Tablet", pricing: 300 },
  ]);

  console.log(res);
};

addOrder();
*/
