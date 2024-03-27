
import Users from "../models/users";
import bcrypt from "bcrypt";

// const bcryptHash = (password) => {
//     console.log(password)
//     return bcrypt.hashSync(password, 10);
// }

const signupUser = async (req, res) => {
    
    const { username, email, password } = req.body;
    console.log(req.body, password, "data....")

    const userData = {
        username: username,
        email: email,
        // password: bcryptHash(password)
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
            data: response,
            statue: true,
            message: "Signup successfully"
        })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
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
        status: false,
        message: "User login successfully"
    })
}

export {
    signupUser,
    userLogin
}