import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    avatarIcon: String,
    topic: String,
    userName: String,
    handle: String,
    time: String,
    image: String

}, {collection: 'tuits'});
export default schema;