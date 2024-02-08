export type ArticleType = {
    id: number;
    title: string;
    content: string;
    created_date: string;
    updated_date: string;
    author_id: number;
    tags: Array<number>;
}