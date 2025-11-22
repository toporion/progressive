const UserModel = require("../models/UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    // Logic to create a new user
    console.log(req.body)
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const profileIamge = req.file ? req.file.path : null;
        const hashedPassword = await bcrypt.hash(String(password), 10);
        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
            ProfileImage: profileIamge,
        });
        await newUser.save();
        res.status(201).json({
            succsess: true,
            message: 'User created successfully',
            data: newUser
        })
    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });

    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(String(password), user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const jwtToken = jwt.sign(
            { id: user._id, email: user.email, role: user.role, profileImage: user.ProfileImage },
            process.env.JWT_SECRET,)
        res.status(200).json({
            success:true,
            message: 'Login successful',
            jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profileImage: user.ProfileImage,
            }
        })
    } catch (error) {
        console.log('Error logging in user:', error);
        res.status(500).json({ message: 'Error logging in user', error });
    }
}

module.exports = { createUser, loginUser };