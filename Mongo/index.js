const mongoose = require('mongoose');

// let url = https://localhost:8000/user

// here https and mongo same reqtype , then local host and 127 thing is also same then both port no and then db name for mongo and route name for url

// moongoose.connect("mongodb://127.0.0.1:27017/test" )

main()
    .then((r) => { console.log("connection done"); })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number,
    }
);

const User = mongoose.model("User", userSchema);

user1 = new User({ name: "Ayush", email: "ayush@gmail.com", age: 21 });

// user1.save()
//     .then((res) => { console.log(res); })
//     .catch((err) => { console.log(err); });

// User.insertMany([
//     { name: "Ayush", email: "ndwn@dwan", age: 21 },
//     { name: "ksdyush", email: "pot@ndwan", age: 21 },
//     { name: "juush", email: "helool@an", age: 21 },
// ]).then((res) => { console.log(res); })

// User.find({}).then((res) => { console.log(res); }) //print all data

// User.findOne({age : {$gt:21}}).then((res) => { console.log(res); }) //print all data with age 21

// User.findById("67a183228fd639d11608247e").then((res) => { console.log(res); }) //print all data with id

User.updateOne({name:"Ayush"},{age:25}).then((res) => { console.log(res); }) //update age of Ayush to 25

User.find({ name: "Ayush" }).then((res) => { console.log(res); }) //print all data with name Ayush
