// Import required libraries
const { faker } = require('@faker-js/faker'); // Used to generate fake data (e.g., usernames, emails, passwords)
const mysql = require('mysql2'); // MySQL library for database operations
const express = require('express'); // Express framework for building the server
const Path = require('path'); // Path module for handling file paths
const app = express(); // Initialize the Express app
const methodOverride = require('method-override'); // Middleware to override HTTP methods (e.g., PATCH, DELETE)

// Set up view engine and static files
app.set("view engine", "ejs"); // Use EJS as the templating engine
app.set("views", Path.join(__dirname, "views")); // Set the directory for EJS templates
app.use(express.static(Path.join(__dirname, '/public'))); // Serve static files from the "public" directory
app.use(methodOverride('_method')); // Enable method overriding using the `_method` query parameter
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

// Define the port for the server
const PORT = 3000;

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost', // Database host
    user: 'root', // Database user
    database: 'delta', // Database name
    password: 'root' // Database password
});

// Function to generate a fake user
let createUser = () => {
    return [
        faker.string.uuid(), // Generate a unique ID
        faker.internet.username(), // Generate a random username
        faker.internet.email(), // Generate a random email
        faker.internet.password(), // Generate a random password
    ];
};

// Example: Inserting fake users into the database (commented out for now)
/*
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = []; // Array to hold 10 fake users
for (let i = 0; i < 10; i++) {
    data.push(createUser());
}

try {
    connection.query(q, [data], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    });
} catch (err) {
    console.log(err);
}
connection.end();
*/

// Home page route
app.get('/', (req, res) => {
    let q = "SELECT COUNT(*) FROM user"; // Query to count the total number of users
    try {
        connection.query(q, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Database error"); // Handle database errors
            } else {
                let cnt = results[0]['COUNT(*)']; // Extract the count of users
                res.render("home.ejs", { cnt }); // Render the home page with the user count
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error"); // Handle unexpected errors
    }
});

// Show all users route
app.get('/users', (req, res) => {
    let q = "SELECT * FROM user"; // Query to fetch all users
    try {
        connection.query(q, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Database error"); // Handle database errors
            } else {
                let data = results; // Store the fetched user data
                res.render("view.ejs", { data }); // Render the view page with the user data
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error"); // Handle unexpected errors
    }
});

// Edit user page route
app.get('/users/:id/edit', (req, res) => {
    let { id } = req.params; // Extract the user ID from the URL
    let q = "SELECT * FROM user WHERE id = ?"; // Query to fetch a specific user by ID
    try {
        connection.query(q, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Database error"); // Handle database errors
            } else {
                let user = results[0]; // Store the fetched user data
                res.render("edit.ejs", { user }); // Render the edit page with the user data
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error"); // Handle unexpected errors
    }
});

// Update user route
app.patch('/users/:id', (req, res) => {
    let { id } = req.params; // Extract the user ID from the URL
    let { password: formpass, username: formuser } = req.body; // Extract the password and username from the request body
    let q = "SELECT * FROM user WHERE id = ?"; // Query to fetch the user by ID
    try {
        connection.query(q, [id], (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Database error"); // Handle database errors
            } else {
                let user = results[0]; // Store the fetched user data
                if (user.password.trim() === formpass.trim()) { // Verify the password
                    let updateQuery = "UPDATE user SET username = ? WHERE id = ?"; // Query to update the username
                    connection.query(updateQuery, [formuser, id], (err, results) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send("Database error"); // Handle database errors
                        } else {
                            res.redirect("/users"); // Redirect to the users page after successful update
                        }
                    });
                } else {
                    res.send("Password incorrect"); // Handle incorrect password
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error"); // Handle unexpected errors
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});