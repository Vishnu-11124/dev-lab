import { Suspense } from "react";

type SongPageProps = {
  params: Promise<{ id: string }>;
};

async function SongPage({ params }: SongPageProps) {
  const { id } = await params;

  return <div></div>;
}

export default async function SongDetails({ params }: SongPageProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SongPage params={params} />
    </Suspense>
  );
}
