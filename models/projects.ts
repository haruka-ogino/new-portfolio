export interface IProject {
  _id: string
  title: string
  img: string
  alt: string
  description: string
  githubRepo: string
  deployedLink: string
}

const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  img: String,
  alt: String,
  description: String,
  githubRepo: String,
  deployedLink: String,
})

export const Project = mongoose.model('Project', projectSchema)

// module.exports = Project
