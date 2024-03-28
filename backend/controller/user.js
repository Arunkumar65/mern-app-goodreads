
import Users from "../models/users";
import bcrypt from "bcrypt";

const bcryptHash = (password) => {
    return bcrypt.hashSync(password, 10);
}

const signupUser = async (req, res) => {

    const { username, email, password } = req.body;


    const userData = {
        username: username,
        email: email,
        password: bcryptHash(password)
    }
    const existing_customer = await Users.findOne({ email: email });
    if (existing_customer) {
        res.json({
            status: false,
            data: null,
            message: "Email already exist"
        })
    } else {
        const newUser = new Users(userData);
        const response = await newUser.save();
        res.json({
            data: null,
            statue: true,
            message: "User signup successfully"
        })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password, "data...")
    const verifyUser = await Users.findOne({ email: email });
    if (!verifyUser) {
        return res.json({
            data: null,
            status: false,
            message: "User not found please register"
        })
    }

    const verifyPassword = await bcrypt.compare(password, verifyUser.password);

    if (!verifyPassword) {
        return res.json({
            data: null,
            status: false,
            message: "invalid password"
        })
    }

    res.json({
        data: null,
        status: true,
        message: "User login successfully"
    })
}

export {
    signupUser,
    userLogin
}