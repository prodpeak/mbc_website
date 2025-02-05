import React from 'react';

export function IconDexScreener(props) {
    let fill = props.dark ? '#1F420D' : '#60dd3c';
    let size = props.size ?? 33;

    return (
        <svg id="dex-screener-seeklogo" xmlns="http://www.w3.org/2000/svg" width={size*0.85} height={size}
             viewBox="0 0 28.192 33.518">
            <path id="Path_45" data-name="Path 45"
                  d="M42.343,11.956a21.184,21.184,0,0,0,3.641-2.3,1.908,1.908,0,0,1,.164,1.476,1.628,1.628,0,0,1-.54.729,2.453,2.453,0,0,1-.981.451,3.229,3.229,0,0,1-2.284-.358m.178,5.245,1.359.785c-2.775,1.555-3.529,4.443-4.425,7.256-.9-2.813-1.65-5.7-4.425-7.256l1.359-.785a.666.666,0,0,0,.43-.654c-.125-2.634.587-3.8,1.546-4.531a1.708,1.708,0,0,1,2.181,0c.959.731,1.671,1.9,1.546,4.531a.666.666,0,0,0,.43.654ZM39.455,0a12.294,12.294,0,0,1,4.513.94,11.349,11.349,0,0,1,2.629,1.6,12.707,12.707,0,0,1,.986.9,4.106,4.106,0,0,0,2.774-1.869c-1.032,3.382-5.739,7.376-9,8.9l0,0a3.031,3.031,0,0,0-3.8,0l0,0c-3.259-1.528-7.966-5.522-9-8.9a4.105,4.105,0,0,0,2.774,1.869,12.773,12.773,0,0,1,.986-.9A11.349,11.349,0,0,1,34.942.94,12.294,12.294,0,0,1,39.455,0M36.566,11.956a21.183,21.183,0,0,1-3.641-2.3,1.908,1.908,0,0,0-.164,1.476,1.63,1.63,0,0,0,.54.729,2.454,2.454,0,0,0,.981.451,3.229,3.229,0,0,0,2.284-.358"
                  transform="translate(-25.359)" fill={fill} fill-rule="evenodd"/>
            <path id="Path_46" data-name="Path 46"
                  d="M22.058,57.166a18.257,18.257,0,0,0,1.865-2.249l.259.488a11.294,11.294,0,0,1,1.268,5.2l0,2.968.016,1.539a24.438,24.438,0,0,0,2.729,11.1l-3.874-3.124-2.741,4.448L18.7,74.824l-4.6,7.467-4.6-7.467-2.88,2.711L3.874,73.087,0,76.21a24.44,24.44,0,0,0,2.729-11.1l.016-1.539,0-2.968a11.29,11.29,0,0,1,1.268-5.2l.259-.488a18.254,18.254,0,0,0,1.865,2.249l-.225.467a3.734,3.734,0,0,0-.241,2.886A3.461,3.461,0,0,0,6.8,62.08a4.291,4.291,0,0,0,1.715.8A4.889,4.889,0,0,0,9.746,63a9.928,9.928,0,0,0-.14,1.676L5.952,66.783l2.82,1.581a4.69,4.69,0,0,1,.641.433c2.325,2.087,3.723,8.262,4.683,11.279.961-3.016,2.358-9.191,4.683-11.279a4.685,4.685,0,0,1,.641-.433l2.82-1.581-3.654-2.111A9.928,9.928,0,0,0,18.447,63a4.889,4.889,0,0,0,1.226-.116,4.29,4.29,0,0,0,1.715-.8,3.461,3.461,0,0,0,1.136-1.561,3.734,3.734,0,0,0-.241-2.886l-.225-.467Z"
                  transform="translate(0 -48.773)" fill={fill} fill-rule="evenodd"/>
        </svg>
    );
}