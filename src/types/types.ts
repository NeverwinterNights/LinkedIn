

export type PostType = {
    id: string
    author: AuthorType
    content: string
    image?: string
    likes: number
    comments: CommentType[]
}

export type AuthorType = {
    id: string
    name: string
    position: string
    image: string
}

export type CommentType = {
    user: UserType
    comment: string
    timestamp: string
}

export type UserType = {
    name: string
    image: string
}
