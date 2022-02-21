export const convertMinsToHrsMins = (mins: any) => {
    const h: any = Math.floor(mins / 60);
    const m: any = mins % 60;
    return `${h}h ${m}m`;
};
