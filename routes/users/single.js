const User = require('../../models/user');

module.exports = async (req, res) => {
    // We need to grab our user ID our of the request params
    // We know we can get this from req.params:
    // const id = req.params.id;

    // We can also destructure this, b/c destructuring is rad:
    const { id } = req.params;

    const theUser = await User.getById(id);
    console.log(`The User Route for ${id}`);
    
    if (theUser != null) {
        // A user is found, we're all clear...
        res.status(200).json({ theUser });
    } else {
        // D'oh! We cannot find that user, they are code 404!
        res.status(404).send(`Invalid User ID: ${id}`);
    }
  };