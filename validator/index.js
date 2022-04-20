exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', 'Write a title').notEmpty(); //from express-validator
    req.check('title', 'Title must be between 4 to 150 characters').isLength(
        {
            min: 4,
            max: 150
        }
    );

    // body
    req.check('body', 'Write a body').notEmpty(); //from express-validator
    req.check('body', 'Body must be between 4 to 2000 characters').isLength(
        {
            min: 4,
            max: 2000
        }
    );

    // check for errors
    const errors = req.validationErrors();
    // if error - show the first one as they happen
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]; // shows the first from errors array
        return res.status(400).json({
            error: firstError
        });
    }
    // make sure that the process lead to run to the next middleware
    next();

}