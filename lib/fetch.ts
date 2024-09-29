"use server";

export async function ping(url: string): Promise<boolean> {
    const timeout = 10000; // 10 seconds

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const fetchPromise = fetch(url, { mode: "cors", cache: "no-cache", signal: controller.signal })
        .then(() => true)
        .catch((error) => {
            console.error(`Error pinging ${url}:`, error);
            return false;
        });

    const timeoutPromise = new Promise<boolean>((resolve) => {
        setTimeout(() => {
            console.error(`Timeout error pinging ${url}`);
            resolve(false);
        }, timeout);
    });

    const result = await Promise.race([fetchPromise, timeoutPromise]);
    clearTimeout(timeoutId);
    return result;
}
