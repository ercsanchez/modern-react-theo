import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/8d54213e-8df8-4696-94c5-f80b7e867f6b-x8h13l.png",
  "https://utfs.io/f/3d4eeb1b-c405-444f-af5c-d6417f810bde-1qer2i.jpeg",
  "https://utfs.io/f/836334aa-fbda-4545-8ab6-f2d9a5726478-tuq3ri.png",
  "https://utfs.io/f/a7ac99b2-ccaa-454e-bdd4-881896d1e98b-x8h13m.jpg",
  "https://utfs.io/f/fac54be9-5551-494e-b900-be55335402cd-x8h17y.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="gap flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
