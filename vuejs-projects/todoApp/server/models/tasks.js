const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a product schema
const taskSchema = {

    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    done: {
        type: Boolean,
        default: false
    }
}

const Task = mongoose.model("product" , taskSchema);
module.exports = Task;