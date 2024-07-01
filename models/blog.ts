export interface BlogEntry {
  title: string
  date: string
  text: string
  images?: BlogImage[]
}

interface BlogImage {
  description: string
  link: string
}
