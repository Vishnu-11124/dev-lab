import { movies } from "@/data/constant";
import { Movie } from "@/dataType/types";
import { Suspense } from "react";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

async function MovieDetails({ params }: MoviePageProps) {
  const { id } = await params;

  const movieData: Movie | undefined = movies.find((m) => m.id === Number(id));

  return (
    <div>
      <h1>Movie: {id}</h1>
    </div>
  );
}

export default function SingleMovie({ params }: MoviePageProps) {
  return (
    <Suspense fallback={<p>Loading movie...</p>}>
      <MovieDetails params={params} />
    </Suspense>
  );
}
