import React, { FC } from "react";

export const SearchIcon: FC<React.SVGProps<SVGElement>> = (props) => {
    return (
        <div>
            <svg
                width="20px"
                height="27.17px"
                viewBox="0 0 19.161 26.036"
                stroke="#000"
                {...props}
            >
                <g transform="translate(-956.685 -27.324)">
                    <g>
                        <g transform="translate(956.685 27.324)" fill="none"
                           stroke-miterlimit="10" stroke-width="1">
                            <circle cx="9.087" cy="9.087" r="9.087" stroke="none"></circle>
                            <circle cx="9.087" cy="9.087" r="8.587" fill="none"></circle>
                        </g>
                    </g>
                    <line x2="3.152" y2="5.459" transform="translate(972.011 47.218)"
                          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"></line>
                </g>
            </svg>
        </div>
    );
};
