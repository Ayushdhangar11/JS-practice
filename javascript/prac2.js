let color = "red";

if(color === "green") {
    console.log("Permission allowed: You can proceed!");
} else if (color === "yellow") {
    console.log("Caution: Prepare to stop!");
} else if (color === "red") {
    console.log("Permission denied: Stop!");
} else {
    console.log("Invalid input: Please enter 'green', 'yellow', or 'red'.");
}