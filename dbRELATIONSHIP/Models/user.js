const mongoose = require("mongoose");

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  
}

const userSchema = new mongoose.Schema({
  name: String,
  address: [
    {
        _id: false, // Disable _id for subdocument and it will merge both address in location only
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  const newUser = new User({
    name: "John Doe",
    address: [
      {
        location: "Dhaka",
        city: "Bangladesh",
      },
    ],
  });

  // Add another address
  newUser.address.push({ location: "Chittagong", city: "Bangladesh" });
  
  const result = await newUser.save();
  console.log(result);
};

addUser();
