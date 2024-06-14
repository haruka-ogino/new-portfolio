import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  title: string
  img: string
  alt: string
  description: string
  githubRepo: string
  deployedLink: string
}

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  img: { type: String, required: true },
  alt: { type: String, required: true },
  description: { type: String, required: true },
  githubRepo: { type: String, required: true },
  deployedLink: { type: String, required: true },
})

export const Project = mongoose.model<IProject>('Project', projectSchema)
