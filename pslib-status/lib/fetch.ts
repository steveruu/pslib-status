"use server";

// pings the server to check if it's online
export default async function ping(url: string): Promise<boolean> {
    try {
        await fetch(url, { mode: "cors" });
        return true;
    } catch {
        return false;
    }
}
