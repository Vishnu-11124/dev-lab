import { Suspense } from "react";

type SongPageProps = {
  params: Promise<{ id: string }>;
};

async function SongPage({ params }: SongPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Song Details</h1>
      <p>Song ID: {id}</p>
    </div>
  );
}


export default async function SongDetails({ params }: SongPageProps){
    return(
        <Suspense fallback={<p>Loading...</p>}>
            <SongPage params={params}/>
        </Suspense>
    )
}