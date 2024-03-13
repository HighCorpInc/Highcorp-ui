import React from 'react';

export const TrunkIcon = (props?: { width?: string, height?: string, x?: number, y?: number, color?: string, id ?: string}) => {
    return (
        <image href='./assets/trunk.svg' width={props?.width} x={props?.x} y={props?.y} id={props?.id}  style={{ transition: "color 0.5s ease", filter: "invert(99%) sepia(99%) saturate(48%) hue-rotate(112deg) brightness(110%) contrast(98%)"}} />
    )
}