import React, { FC } from "react";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType";
import { Accordion } from "../molecules/Accordion";
import { SerializedStyles } from "@emotion/react";

type AccordionProps = {
    articlesCount: ArticlesCounts;
    color: string
    cssColor: SerializedStyles
};

export const MonthlyArchive: FC<AccordionProps> = (props) => {
    const { articlesCount, color, cssColor } = props;

    return (
        <div>
            {articlesCount.map((yearData) => {
                const yearKey = yearData.year;
                return (
                    <Accordion articlesCount={yearData} key={yearKey} color={color} cssColor={cssColor}/>
                )
            })}
        </div>
    )
}
