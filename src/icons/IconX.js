import React from 'react';

export function IconX(props) {
    let fill = props.dark ? '#1F420D' : '#60dd3c';
    let size = props.size ?? 31;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 31.283 31.283">
            <path id="Icon_fa-brands-square-x-twitter" data-name="Icon fa-brands-square-x-twitter"
                  d="M4.469,2.25A4.473,4.473,0,0,0,0,6.719V29.064a4.473,4.473,0,0,0,4.469,4.469H26.814a4.473,4.473,0,0,0,4.469-4.469V6.719A4.473,4.473,0,0,0,26.814,2.25ZM25.215,8.116,17.967,16.4l8.526,11.27H19.817l-5.223-6.836L8.61,27.668H5.293l7.751-8.861L4.867,8.116H11.71l4.727,6.25L21.9,8.116h3.317Zm-2.64,17.569L10.712,9.994H8.736l12,15.691h1.836Z"
                  transform="translate(0 -2.25)" fill={fill}/>
        </svg>
    );
}