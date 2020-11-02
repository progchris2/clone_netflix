import React from 'react';

interface IIcons {
    name?: string;
    size?: string;
    color?: string;
}

const Icons = ({ name, size, color = 'current' }: IIcons) => {
    switch (name) {
        default:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${size}px`}
                    height={`${size}px`}
                    viewBox="0 0 1000.000000 1000.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M593 9820 c-173 -35 -330 -172 -396 -347 l-22 -58 -3 -4380 c-2
            -3186 0 -4396 8 -4440 32 -173 169 -330 345 -397 l60 -23 2373 -3 2372 -2 0
            1870 0 1870 -630 0 -630 0 0 730 0 730 630 0 630 0 0 633 c0 495 3 660 15 759
            98 843 595 1406 1379 1563 66 13 165 29 218 34 200 22 797 10 1193 -24 93 -8
            175 -15 182 -15 11 0 13 -126 13 -659 l0 -660 -497 -3 c-476 -4 -502 -5 -578
            -26 -218 -60 -332 -170 -392 -377 -15 -53 -18 -127 -21 -642 l-3 -583 721 0
            720 0 -5 -22 c-2 -13 -43 -324 -90 -693 -47 -368 -88 -687 -91 -708 l-6 -37
            -624 0 -624 0 0 -1870 0 -1870 1258 0 c1073 0 1266 2 1320 15 199 47 365 221
            401 419 15 84 15 8708 0 8792 -36 198 -202 372 -401 419 -55 13 -612 15 -4423
            14 -2398 -1 -4379 -5 -4402 -9z"
                        />
                    </g>
                </svg>
            );
    }
};

export default Icons;
