import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const tempPw = bcrypt.hashSync('1234', bcrypt.genSaltSync(10), null);

const UserSchema = new Schema({
   username: { type: String, required: true },
   password: { type: String, required: true, default: tempPw },
   email: String,
   first_name: String,
   last_name: String,
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
