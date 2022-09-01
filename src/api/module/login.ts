import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = {}> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface IoginPar {
    account: string;
    newPlatformType: string;
    psw: string;
    register_source: string;
}

export const login = (data: IoginPar) => {
    return request<IResponseType>({
        url: '/login',
        method: 'post',
        data
    });
};
export const logout = () => {
    return request<IResponseType>({
        url: '/logout',
        method: 'put'
    });
};
