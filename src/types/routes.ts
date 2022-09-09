import { RouteRecordRaw } from 'vue-router';

export interface OriginRoute {
    path: string;
    name: string;
    meta: {
        title: string;
        keepAlive: boolean;
        requireAuth: boolean;
    };
    hidden?: boolean;
    icon?: string;
    children?: Array<OriginRoute>;
}

export type RouteRecordRawWithHidden = RouteRecordRaw & {
    hidden: boolean;
    icon?: string;
};
