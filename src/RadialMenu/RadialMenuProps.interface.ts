import { RadialMenuItem } from './RadialMenu.interface';

export interface RadialMenuProps {
    size: number;
    color: string;
    activeColor: string;
    menuItems: RadialMenuItem[];
}