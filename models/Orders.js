
const mongooese = require('mongoose');

const ordersModel = mongooese.Schema({

    email: {
        type: String,
        required: true,
    },
    accountNumber: Number,


    orders: [
        {
            scriptName: String,
            qty: Number,
            avgCost: Number,
            createdAt: Date,
            orderStatus: {
                Active: Number, // 1101
                Failed: Number, //1102
                Completed: Number, //1103
                Cancelled: Number, //1103
            },
            orderPrice: Number,
            orderValidity: {
                IOC: Number,
                DAY: Number,
            },
            positionType: {
                Intraday: Number,
                Delivery: Number,
            },
            orderType: {
                Limit: Number,
                AMO: Number,
                Market: Number
            }
        }

    ],



    schema_version: {
        type: Number,
        default: 1
    }



})

module.exports = mongooese.model('order', ordersModel);



