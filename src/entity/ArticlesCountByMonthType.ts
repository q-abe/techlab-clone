type ArticlesCountByMonthType = {
    month: number;
    postCount: number;
}

export type ArticlesCountOfYear = {
    year: string;
    data: ArticlesCountByMonthType[];
}

export type ArticlesCounts = ArticlesCountOfYear[];

