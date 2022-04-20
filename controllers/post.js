const Post = require('../models/post');

exports.getPosts = (req, res) => {
    // res.send("Hello world from node js");
    res.json({
        posts: [
            {
                tittle: 'First post'
            },
            {
                tittle: 'Second post'
            }
        ]
    });
};

// this is the method creates post
exports.createPost = (req, res) => {
    const post = new Post(req.body); // new instance of post
    // log + unoque ID for post
    // console.log("CREATING POST: ", post);// works
    // console.log("CREATING POST: ", req.body); //! express by itself doesn't parse request body, that's why undefined body. So, have to install body-parser package and go to app.js
    post.save((err, result) => { //! error handling:
        if(err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                post: result
            }
        );
    });
    // created posts are visible here:
    // https://cloud.mongodb.com/v2/6253102d385028642e25b1e7#metrics/replicaSet/625312cc80756507dda40f94/explorer/myFirstDatabase/posts/find
}