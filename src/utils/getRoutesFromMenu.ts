import type { MenuProps } from 'antd';
import type { JSX } from 'react';

export interface RouteItem {
    path: string;
    element: JSX.Element;
}
type MenuItemWithComponent = Required<MenuProps>['items'][number] & {
    component?: React.ReactNode;
    children?: MenuItemWithComponent[];
};;

export const extractRoutes = (items: MenuItemWithComponent[]): RouteItem[] => {
    const routes: RouteItem[] = [];
    const walk = (list: MenuItemWithComponent[]) => {
        for (const item of list) {
            if (item.children) {
                walk(item.children);
            } else if (item.component) {
                routes.push({ path: item.key as string, element: item.component as JSX.Element });
            }
        }
    };

    walk(items);

    return routes;
};
