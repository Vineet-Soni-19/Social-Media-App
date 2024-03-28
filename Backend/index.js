import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import userModel from './models/User.js'

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const port = process.env.PORT || 4000;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));



app.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const { email } = req.body
        const result = await userModel.findOne({ email });
        if (result) {
            const dataSend = {
                _id: result._id,
                fullname: result.fullname,
                username: result.username,
                email: result.email,
                image: result.image,
            }
            console.log(dataSend);
            res.send({ message: "Login is successful", alert: true, data: dataSend })
        }
        else {
            res.send({ message: 'Email is not available, please sign up', alert: false })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error', alert: false });
    }
})


app.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        const { email } = req.body;
        console.log(email);
        const result = await userModel.findOne({ email });
        if (result) {
            // Email is already registered
            res.send({ message: 'Email id is already registered', alert: false });
        } else {
            // Create a new user and save to the database
            const newUser = new userModel(req.body);
            await newUser.save();
            res.send({ message: 'Successfully signed up', alert: true });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
})

app.listen(port, () => console.log("Example app listening on port " + port));