import mongoose from 'mongoose';


export const URLS = mongoose.model('URLs', new mongoose.Schema({
    url: {type: String}, 
    code: {type: String}
}), 'URLs');