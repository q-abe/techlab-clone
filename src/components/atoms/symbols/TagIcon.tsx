import React, { FC } from "react";

export const TagIcon: FC<React.SVGProps<SVGElement>> = (props) => {
    return (
        <div>
            <svg
                width="100%"
                height="auto"
                viewBox="0 0 49.029 24"
                fill="#adadad"
                {...props}
            >
                <g transform="translate(-6.5 -14.668)">
                    <g transform="translate(6.5 14.668)">
                        <rect width="6.42" height="24"></rect>
                        <path
                            d="M51.978,26.668l-11.667,12v-24Zm-11.667-12H10.976v24H40.311Z"
                            transform="translate(-2.95 -14.668)"></path>
                    </g>
                    <circle cx="3.21" cy="3.21" r="3.21"
                            transform="translate(40.05 23.132)" fill="#fff"></circle>
                </g>
            </svg>
        </div>
    );
};
