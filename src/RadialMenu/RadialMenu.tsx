import { polarToCartesian } from './utils';
import { RadialMenuProps } from './RadialMenuProps.interface';

import React from 'react';

import { RadialMenuItem } from './RadialMenuItem/RadialMenuItem';

export class RadialMenu extends React.Component<RadialMenuProps, any> {
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

  getPaths() {
    const inner_rad = this.size * 0.2;
    const text_rad = this.size * 0.33;
    const outer_rad = this.size * 0.47;
    const halfSize = this.size * 0.5;
    const X0 = halfSize;
    const Y0 = halfSize;
    const total = this.props.menuItems.length;
    const halfSection = (360 / total) * 0.5;

    return this.props.menuItems.map((item, index) => {
      const midCoord = polarToCartesian(X0, Y0, text_rad, halfSection * (index * 2 + 2));
      const menuItemProps = {
        label: item.label,
        altLabel: item?.altLabel,
        action: item.action,
        icon: item.icon,
        X0: X0,
        Y0: Y0,
        midCoord: midCoord,
        inner_rad: inner_rad,
        outer_rad: outer_rad,
        halfSection: halfSection,
        halfSize: halfSize,
        index: index,
        color: this.props.color,
        activeColor: this.props.activeColor,
        size: this.props.size
      }
      return (
        <>
          <RadialMenuItem {...menuItemProps} />
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

export default RadialMenu;
