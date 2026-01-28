export function daysSince(startDateStr?: string) {
    if (!startDateStr) return 0;

    const [y, m, d] = startDateStr.split("-").map(Number);
    const start = Date.UTC(y, m - 1, d);

    const now = new Date();
    const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor((today - start) / msPerDay);
}