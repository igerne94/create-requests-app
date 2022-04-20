const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
// for POST we need title and body
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000

    }
});

// from here import to post.js controllers
module.exports = mongoose.model("Post", postSchema);