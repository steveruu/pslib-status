import Status from "@/components/Status";
import { ping } from "@/lib/fetch";
import { revalidatePath } from "next/cache";
import { FaGithub } from "react-icons/fa";

export default async function Home() {
    const bakalariUrl = ping("https://bakalar.pslib.cz");
    const oldwebUrl = ping("https://web.pslib.cz");
    const newwebUrl = ping("https://pslib.cz");

    const [bakastatus, oldwebstat, newwebstat] = await Promise.all([
        bakalariUrl,
        oldwebUrl,
        newwebUrl,
    ]);

    revalidatePath("/");

    return (
        <main className="max-w-[1024px] mx-auto my-4">
            <h1 className="text-5xl text-center">pslib-status</h1>
            <p className="text-center">
                Tipnete si, jaký uptime mají Bakaláři?
            </p>
            <a
                href="https://github.com/steveruu/pslib-status"
                className="block text-center underline text-blue-500"
            >
                <FaGithub className="inline-block" /> source code here
            </a>

            <div className="flex flex-col justify-center items-center gap-2 mt-6">
                <Status
                    status={bakastatus ? "online" : "offline"}
                    name="Bakaláři"
                />
                <Status
                    status={oldwebstat ? "online" : "offline"}
                    name="Starý web"
                />
                <Status
                    status={newwebstat ? "online" : "offline"}
                    name="Nový web"
                />
            </div>
        </main>
    );
}
