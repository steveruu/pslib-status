import Status from "@/components/Status";
import { ping } from "@/lib/fetch";

export default async function Home() {
    const bakalariUrl = ping("https://bakalar.pslib.cz");
    const oldwebUrl = ping("https://web.pslib.cz");
    const newwebUrl = ping("https://pslib.cz");

    const [bakastatus, oldwebstat, newwebstat] = await Promise.all([
        bakalariUrl,
        oldwebUrl,
        newwebUrl,
    ]);

    console.log(bakastatus);

    return (
        <main className="max-w-[1024px] mx-auto my-4">
            <h1 className="text-5xl text-center">pslib-status</h1>
            <p className="text-center">
                Tipnete si, jaký uptime mají Bakaláři?
            </p>
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
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
