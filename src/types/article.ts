export type Article = {
  id: string
  slug: string
  cover: string
  title: string
  description: string
  category: string
  contents: Array<{ label: string; link: string; order: number }>
  mdx: string
  createdAt: string
}
