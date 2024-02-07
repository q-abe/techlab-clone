type ArticlesCountByMonthType = {
    month: number;
    post_count: number;
}

type ArticlesCountOfYear = {
    year: string;
    data: ArticlesCountByMonthType[];
}

export type ArticlesCounts = ArticlesCountOfYear[];

