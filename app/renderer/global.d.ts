declare module '*.less';
declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}
declare interface Window {
    pdk: string;
}