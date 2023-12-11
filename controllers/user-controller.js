const User = require("../model/User.js")
const bcrypt = require("bcryptjs");

module.exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }
    if (existingUser) {
        return res
            .status(400)
            .json({ message: "User Already Exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password,6);

    const user = new User({
        name,
        email,
        password: hashedPassword,
          blogs: [],
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ user });
};
// module.exports = signup;
