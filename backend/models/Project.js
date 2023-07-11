const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    ProjectName: {type: String},
    ProjectDetail: {type: String}
})

module.exports = mongoose.model('Project', ProjectSchema)