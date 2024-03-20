interface Coord {
    x: number;
    y: number;
}

export interface RadialMenuItemInterface {
    label: string,
    altLabel?: string,
    action: string,
    icon: JSX.Element,
    X0: number,
    Y0: number,
    midCoord: Coord,
    inner_rad: number,
    outer_rad: number,
    halfSection: number,
    halfSize: number,
    index: number,
    color: string,
    activeColor: string,
    size: number
}