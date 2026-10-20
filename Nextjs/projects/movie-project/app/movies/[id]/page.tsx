import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/constant";
import { Movie } from "@/dataType/types";
import { Span } from "next/dist/trace";
import { Suspense } from "react";

type MoviePageProps = {
  params: Promise<{ id: string }>;
};

async function MovieDetails({ params }: MoviePageProps) {
  const { id } = await params;

  const movieData: Movie | undefined = movies.find((m) => m.id === Number(id));

  const relatedMovies: Movie[] = movieData
    ? movies.filter(
        (m) => m.language === movieData.language && m.id !== movieData.id,
      )
    : [];

  const formatRuntime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    movieData && (
      <div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Movie Header */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {movieData.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-400 sm:text-base">
                <span>{movieData.releaseYear}</span>
                <span>•</span>
                <span>{movieData.language}</span>
                <span>•</span>
                <span>{formatRuntime(movieData.duration)}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
              <div className="text-3xl text-amber-400">★</div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  IMDb Rating
                </p>
                <p className="text-2xl font-bold">
                  {movieData.rating}
                  <span className="text-sm font-normal text-slate-400">
                    /10
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Movie Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Movie Poster */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={movieData.image}
                  alt={movieData.title}
                  className="max-h-162.5 w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Audience Reviews</h2>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
                  {movieData.comments.length}
                </span>
              </div>

              <div className="flex-1 space-y-4">
                {movieData.comments.map((cmnt) => (
                  <div
                    key={cmnt.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-indigo-500/50"
                  >
                    <p className="text-sm leading-6 text-slate-300">
                      "{cmnt.text}"
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-3">
                      <p className="text-sm font-semibold text-slate-200">
                        {cmnt.username}
                      </p>

                      <p className="flex items-center gap-1 text-sm font-semibold text-amber-400">
                        ★ {cmnt.rating}/10
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Movie Information */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold">About the Movie</h2>

            {/* Genres */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-slate-400">
                Genres:
              </span>

              {movieData.genre.map((gnr, i) => (
                <span
                  key={i}
                  className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/20"
                >
                  {gnr}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="max-w-4xl text-base leading-8 text-slate-300">
              {movieData.description}
            </p>
          </div>

          {/* Related Movies */}
          <div className="mt-14">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Related Movies
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Discover more movies you might enjoy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
              {relatedMovies?.map((rmovie) => (
                <MovieCard movie={rmovie} key={rmovie.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default function SingleMovie({ params }: MoviePageProps) {
  return (
    <Suspense fallback={<p>Loading movie...</p>}>
      <MovieDetails params={params} />
    </Suspense>
  );
}
