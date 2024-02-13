type ArticleContentType = {
    id: number;
    title: string;
    content: string;
    created_date: string;
    updated_date: string;
    author_id: number;
    tags: string[];
}
export type ArticleContentsList = ArticleContentType[];