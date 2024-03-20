import {IconProps} from "./iconProps.interface";

export function LightningIcon(props: IconProps) {
    if (!props.altIcon) {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 512.000000 512.000000" x={props.x} y={props.y}>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={props.color} stroke="none">
                    <path d="M2734 5101 c-12 -5 -33 -25 -47 -43 -21 -28 -1655 -2887 -1700 -2975
                        -27 -52 -22 -90 17 -129 l34 -34 706 0 c388 0 706 -3 706 -8 0 -4 -40 -399
                        -90 -877 -49 -478 -90 -889 -90 -912 0 -84 87 -138 155 -95 24 15 207 333 875
                        1523 609 1084 846 1514 848 1541 4 32 -1 43 -31 73 l-35 35 -716 0 c-631 0
                        -716 2 -716 15 0 8 52 410 115 893 63 483 115 890 115 905 0 60 -88 113 -146
                        88z"
                    />
                </g>
            </svg>
        )
    } else {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 512.000000 512.000000" x={props.x} y={props.y}>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={props.color} stroke="none">
                <path d="M2854.7,3205.8c-143.3,2.8-204.7,5.4-204.7,9.2c0,8,52,410,115,893s115,890,115,905c0,60-88,113-146,88c-12-5-33-25-47-43 c-21-28-1655-2887-1700-2975c-27-52-22-90,17-129l34-34h784.9"/>
                <path d="M2262.4,1915.8c150-1.7,187.6-2.7,187.6-3.8c0-4-40-399-90-877c-49-478-90-889-90-912c0-84,87-138,155-95 c24,15,207,333,875,1523c609,1084,846,1514,848,1541c4,32-1,43-31,73l-35,35h-804"/>
                </g>
            </svg>
        )
    }
}
