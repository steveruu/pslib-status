import Status from '@/components/Status';

export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto my-4">
      <h1 className="text-5xl text-center">pslib-status</h1>
      <p className="text-center">Tipnete si, jaký uptime mají Bakaláři?</p>
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <Status url="https://bakalar.pslib.cz/rodice/Timetable/Public/Actual/Class/2U" name="Bakaláři" />
        <Status url="https://web.pslib.cz" name="Starý web" />
        <Status url="https://pslib.cz" name="Nový web" />
      </div>
    </main>
  );
}
