import { svgDescribeArc, polarToCartesian } from '../utils';

import { CSSProperties, useEffect, useState } from 'react';

import { RadialMenuItemInterface } from './RadialMenuItem.interface';

import { fetchNui } from '../../NuiUtils/fetchNui';

export const RadialMenuItem = (props: RadialMenuItemInterface) => {
    const [isHover, setIsHover] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState(props.color);

    useEffect(() => {
        if (isActive)
            setColor(props.activeColor);
        else
            setColor(props.color);
    }, [isActive]);

    const menuItemStyle : CSSProperties = {
        fill: 'rgba(0, 0, 0, 0.8)',
        transition: 'all 0.15s ease-in-out',
        userSelect: 'none',
        fontSize: '0.8em',
        fontWeight: 700,
      }
    
    const menuItemStyleHover : CSSProperties = {
        fill: 'rgba(0, 0, 0, 0.7)',
        filter: 'drop-shadow(0px 0px 2px ' + color + ')',
        stroke: color,
        strokeWidth: '1px',
        cursor: 'pointer',
      }
    
    const menuItemLabelStyle : CSSProperties = {
        userSelect: 'none',
        fill: 'none',
        textAnchor: 'middle',
        transition: 'all 0.15s ease-in-out',
    }

    const menuItemLabelStyleHover : CSSProperties = {
        fill: 'rgba(255, 255, 255, 1)',
        userSelect: 'none',
        textAnchor: 'middle',
        transition: 'all 0.15s ease-in-out',
        fontSize: '1.1em',
    }

    const MenuItemMouseEnter = () => {
        setIsHover(true);
    }

    const MenuItemMouseLeave = () => {
        setIsHover(false);
    }

    const MenuItemClick = () => {
        fetchNui(props.action);
        if (props.altLabel)
            setIsActive(!isActive);
    }

    return (
        <>
            <g onMouseEnter={() => MenuItemMouseEnter()} onMouseLeave={() => MenuItemMouseLeave()} onClick={() => MenuItemClick()} style={isHover ? menuItemStyleHover : menuItemStyle}>
                <path d={[
                    'M',
                    polarToCartesian(props.X0, props.Y0, props.inner_rad, props.halfSection * (props.index * 2 + 3)).x,
                    polarToCartesian(props.X0, props.Y0, props.inner_rad, props.halfSection * (props.index * 2 + 3)).y,
                ].join(' ') +
                    svgDescribeArc(
                        props.halfSize,
                        props.halfSize,
                        props.inner_rad,
                        0,
                        props.halfSection * (props.index * 2 + 1),
                        props.halfSection * (props.index * 2 + 3),
                    ) +
                    [
                        'L',
                        polarToCartesian(props.X0, props.Y0, props.outer_rad, props.halfSection * (props.index * 2 + 1)).x,
                        polarToCartesian(props.X0, props.Y0, props.outer_rad, props.halfSection * (props.index * 2 + 1)).y,
                    ].join(' ') +
                    svgDescribeArc(
                        props.halfSize,
                        props.halfSize,
                        props.outer_rad,
                        1,
                        props.halfSection * (props.index * 2 + 3),
                        props.halfSection * (props.index * 2 + 1),
                    ) +
                    ['Z'].join(' ')
                }
                />
                {props.icon.type({ x: props.midCoord.x - 17.5, y: props.midCoord.y - 17.5, width: 35, height: 35, color: "white", altIcon: isActive})}
            </g>
            <text x={props.size / 2} y={props.size / 2 + 3} style={isHover ? menuItemLabelStyleHover : menuItemLabelStyle}>
                { isActive ? props.altLabel : props.label }
            </text>
        </>
    )
}
