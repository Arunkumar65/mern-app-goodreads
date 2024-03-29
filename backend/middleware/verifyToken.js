import jwt from "jsonwebtoken";
import Users from "../models/users";

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, async (err, decode) => {
            if (err) {
                return res.json({
                    status: false,
                    data: null,
                    message: "Invalid token"
                })
            }
            const user = await Users.findOne({ _id: decode.id });
            if (!user) {
                return res.json({
                    status: false,
                    data: null,
                    message: "User not found"
                })
            }
            req.user = user;
            next();
        });
    }

    if (!authHeader) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
};