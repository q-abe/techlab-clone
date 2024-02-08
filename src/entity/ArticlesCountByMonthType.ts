type ArticlesCountByMonthType = {
    month: number;
    post_count: number;
}

export type ArticlesCountOfYear = {
    year: string;
    data: ArticlesCountByMonthType[];
}

export type ArticlesCounts = ArticlesCountOfYear[];

