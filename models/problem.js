const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const problemSchema=new Schema({
    name: String,
    problem_statement: String,
    test_cases_input: String,
    test_cases_output: String,
    time_limit: Number,
    memory_limit: Number,
    tags: String,
});

const Problem=mongoose.model('Problem', problemSchema);
module.exports = Problem;