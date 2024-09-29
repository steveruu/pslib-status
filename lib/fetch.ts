"use server";

export async function ping(url: string, timeout = 5000): Promise<boolean> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        await fetch(url, { mode: "cors", cache: "no-cache", signal: controller.signal });
        clearTimeout(timeoutId);
        return true;
    } catch (error) {
        clearTimeout(timeoutId);
        console.error(`Error pinging ${url}:`, error);
        return false;
    }
}
