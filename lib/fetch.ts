"use server";

export async function ping(url: string): Promise<boolean> {
    try {
        await fetch(url, { mode: "cors" });
        return true;
    } catch {
        return false;
    }
}
