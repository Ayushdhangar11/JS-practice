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

const userSchema = new mongoose.Schema({
    name: String,
    email : String,
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // Fetch existing user
    let user = new User({
        name: "John Doe",
        email: "johndae22@gmail.com",
    });

    let post1 = new Post({
        title: "Post 1",
        content: "Content of Post 1",
        user: user._id,
    });

    let post2 = new Post({
        title: "Post 2",
        content: "Content of Post 2",
        user: user._id,
    });


    post2.user = user;
    post1.user = user;

    user = await user.save();
    post1 = await post1.save();
    post2 = await post2.save();
};

addData();