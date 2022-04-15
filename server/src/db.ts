import mongoose from 'mongoose';

const time = 0;



const URLS1 = mongoose.model('URLS1', new mongoose.Schema({
    url: {type: String}, 
    code: {type: String},
    createdAt: {type: Date, expires: '1d', default: Date.now}
}), 'URLS1');

const URLS15 = mongoose.model('URLS15', new mongoose.Schema({
    url: {type: String}, 
    code: {type: String},
    createdAt: {type: Date, expires: '15d', default: Date.now}
}), 'URLS15');

const URLS30 = mongoose.model('URLS30', new mongoose.Schema({
    url: {type: String}, 
    code: {type: String},
    createdAt: {type: Date, expires: '30d', default: Date.now}
}), 'URLS30');

export const DB = (type: Number) => {
    switch (type){
        case 1:
            return URLS1; 
        case 15: 
            return URLS15;
        case 30: 
            return URLS30; 
    }
    return URLS1; 
}