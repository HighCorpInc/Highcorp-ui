import { polarToCartesian } from './utils';
import { svgDescribeArc } from './utils';
import { RadialMenuItemProps } from './RadialMenuItemProps.interface';

import React from 'react';

import './RadialMenuItem.scss'

export class RadialMenuItem extends React.Component<RadialMenuItemProps, any> {
  private size: number;

  constructor(props: any) {
    super(props);
    this.size = this.props.size;
  }

  getViewBox() {
    const minX = 0;
    const minY = 0;
    const widthX = this.size;
    const widthY = this.size;
    return `${minX} ${minY} ${widthX} ${widthY}`;
  }

  MenuItemMouseEnter(index: number) {
    const section = document.getElementById(`#section_${index + 1}`);
    section?.style.setProperty('fill', 'rgba(0, 0, 0, 0.7)');
    section?.style.setProperty('filter', 'drop-shadow(0px 0px 2px ' + this.props.color + ')')
    section?.style.setProperty('stroke', this.props.color);
    section?.style.setProperty('stroke-width', '1px');
    section?.style.setProperty('cursor', 'pointer');

    const icon = document.getElementById(`icon_${index + 1}`);
    icon?.style.setProperty('fill', 'rgba(255, 255, 255, 1)');

    const text = document.getElementById(`text_${index + 1}`);
    text?.style.setProperty('fill', 'rgba(255, 255, 255, 1)');
    text?.style.setProperty('filter', 'drop-shadow(0px 0px 5px rgb(0 0 0 / 1))')
  }

  MenuItemMouseLeave(index: number) {
    const section = document.getElementById(`#section_${index + 1}`);
    section?.style.setProperty('fill', 'rgba(0, 0, 0, 0.8)');
    section?.style.setProperty('filter', 'none');
    section?.style.setProperty('stroke', 'none');
    
    const icon = document.getElementById(`icon_${index + 1}`);
    icon?.style.setProperty('color', 'rgba(255, 255, 255, 0.8)');

    const text = document.getElementById(`text_${index + 1}`);
    text?.style.setProperty('fill', 'transparent');
  }

  MenuItemClick(index: number) {
    console.log(`Send NUI Message ${this.props.menuItems[index].action} clicked`);
  }

  getPaths() {
    const inner_rad = this.size * 0.2;
    const text_rad = this.size * 0.33;
    // don't exceed the diameter or it will clip
    const outer_rad = this.size * 0.47;
    const halfSize = this.size * 0.5;
    const X0 = halfSize;
    const Y0 = halfSize;
    const total = this.props.menuItems.length;
    const halfSection = (360 / total) * 0.5;

    return this.props.menuItems.map((item, index) => {
      const midCoord = polarToCartesian(X0, Y0, text_rad, halfSection * (index * 2 + 2));
      return (
        <>
          <g
            id={`#section_${index + 1}`}
            className='radial-menu-item'
            onMouseEnter={() => this.MenuItemMouseEnter(index)}
            onMouseLeave={() => this.MenuItemMouseLeave(index)}
            onClick={() => this.MenuItemClick(index)}
          >
            <path
              className='radial-menu-item-shape'
              d={
                [
                  'M',
                  polarToCartesian(X0, Y0, inner_rad, halfSection * (index * 2 + 3))
                    .x,
                  polarToCartesian(X0, Y0, inner_rad, halfSection * (index * 2 + 3))
                    .y,
                ].join(' ') +
                svgDescribeArc(
                  halfSize,
                  halfSize,
                  inner_rad,
                  0,
                  halfSection * (index * 2 + 1),
                  halfSection * (index * 2 + 3),
                ) +
                [
                  'L',
                  polarToCartesian(X0, Y0, outer_rad, halfSection * (index * 2 + 1))
                    .x,
                  polarToCartesian(X0, Y0, outer_rad, halfSection * (index * 2 + 1))
                    .y,
                ].join(' ') +
                svgDescribeArc(
                  halfSize,
                  halfSize,
                  outer_rad,
                  1,
                  halfSection * (index * 2 + 3),
                  halfSection * (index * 2 + 1),
                ) +
                ['Z'].join(' ')
              }
            />
            {item.icon.type({ x: midCoord.x - 15, y: midCoord.y - 15, width: 30, height: 30, id: `icon_${index + 1}`})}
          </g>
            <text
              id={`text_${index + 1}`}
              x={this.size / 2}
              y={this.size / 2 + 3}
              className='radial-menu-item-label'
            >
              {item.label}
            </text>
        </>
      );
    })
  }

  render() {
    return (
      <>
        <svg
          className="radial-menu"
          viewBox={this.getViewBox()}
          width={this.size}
          height={this.size}
        >
          {this.getPaths()}
        </svg>
      </>
    )
  }
}

