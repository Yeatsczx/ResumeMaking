declare module '*.less';
declare module '*.scss';
declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}
declare interface Window {
    pdk: string;
}