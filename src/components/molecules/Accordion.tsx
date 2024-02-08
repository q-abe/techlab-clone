import React, { FC } from "react";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType";
import { SingleAccordion } from "./SingleAccordion";

type AccordionProps = {
    articlesCount: ArticlesCounts;
};

export const Accordion: FC<AccordionProps> = (props) => {
    const { articlesCount } = props;


    return (
        <div>
            {articlesCount.map((yearData, index) => {
                const yearKey = yearData.year;
                return (
                    <SingleAccordion articlesCount={yearData} year={yearKey} key={yearKey}/>
                )
            })}
        </div>
    )
}
