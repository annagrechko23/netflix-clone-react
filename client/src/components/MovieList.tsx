import MovieCard from "./MovieCard";
import { Movie } from '../types/index';
export default function MovieList({ movies, lastElementRef }: { movies: Movie[]; lastElementRef: (node: HTMLDivElement) => void }) {
    return (
        <div className="px-12 mt-4 space-y-8">
            <div>
                <p className="text-black text-2xl font-semibold mb-4">
                    Popular shows
                </p>
                <div className="flex flex-wrap gap-2 justify-between">
                    {movies.map((movie: Movie, index) => (

                        <MovieCard key={movie.id} movie={movie} lastElementRef={movies.length === index + 1 ? lastElementRef : undefined} />
                    ))}
                </div>

            </div>
        </div>
    )
}
