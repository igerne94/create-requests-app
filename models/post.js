const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
// for POST we need title and body
    title: {
        type: String,
        // required: "Title is required"
        required: true
    },
    body: {
        type: String,
        // required: "Body is required"
        required: true
    }
});

// from here import to post.js controllers
module.exports = mongoose.model("Post", postSchema);