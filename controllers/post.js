const Post = require('../models/post');

// V.1. exports.getPosts = (req, res) => {
//     res.json({
//         posts: [{ title: 'First post' }, { title: 'Second post' }] // hardcoded
//     });
// };

// V.2. get posts from the DB; use Post module
exports.getPosts = (req, res) => {
    // const posts = Post.find() //! .find() to find everything in the POST
    const posts = Post.find().select("_id title body") //! specifies exact fields 
    .then( (posts) => {
        // .json with posts (first arg) - is a response with posts from DB:
                                // K    V
        // res.status(200).json({posts: posts}) //! since success allways 200, no need to check status(200)
        // res.json({ posts: posts }) //! can use only value:
        res.json({ posts })
    })
    .catch(err => console.log(err));
};

// this is the method creates post
exports.createPost = (req, res) => {
    const post = new Post(req.body); // new instance of post
    // log + unoque ID for post
    // console.log("CREATING POST: ", post);// works
    // console.log("CREATING POST: ", req.body); //! express by itself doesn't parse request body, that's why undefined body. So, have to install body-parser package and go to app.js
    //? post.save((err, result) => { //! error handling:
        // since we have handlings there in Validator, we dont need:
        //// if(err) {
        ////     return res.status(400).json({error: err});
        //// }
        //? res.status(200).json({ post: result });
    //? });
    post.save().then(result => {
        // res.status(200).json({
        res.json({ // since success allways 200, no need to check status(200)
            post: result
        });
    })

    // created posts are visible here:
    // https://cloud.mongodb.com/v2/6253102d385028642e25b1e7#metrics/replicaSet/625312cc80756507dda40f94/explorer/myFirstDatabase/posts/find
}