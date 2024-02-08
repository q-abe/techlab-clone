import React, { FC } from "react";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType";
import { Accordion } from "../molecules/Accordion";

type AccordionProps = {
    articlesCount: ArticlesCounts;
};

export const MonthlyArchive: FC<AccordionProps> = (props) => {
    const { articlesCount } = props;


    return (
        <div>
            {articlesCount.map((yearData, index) => {
                const yearKey = yearData.year;
                return (
                    <Accordion articlesCount={yearData} year={yearKey} key={yearKey}/>
                )
            })}
        </div>
    )
}
