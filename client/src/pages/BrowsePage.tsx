
import { Navigate } from 'react-router-dom';
import Billboard from '../components/Billboard';
import LoadingCards from '../components/LoadingCards';
import MovieList from '../components/MovieList';
import NavBar from '../components/NavBar';
import useMoviesList from '../hooks/useMoviesList';
import { useState, useRef, useCallback } from 'react';
export default function BrowsePage() {
    const [offset, setOffset] = useState(0)
    const { data, loading, error } = useMoviesList(offset);
    let observer = useRef<null | IntersectionObserver>(null)
    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;

            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setOffset(offset + 12);
                    console.log("intersecting");
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading]
    );
    if (error === "Unauthorized: no plan") {
        return <Navigate to="/plans/" />
    }
    return (
        <div>
            <NavBar />
            <Billboard />
            <div className="pb-5">
                {error && <p>{error}</p>}

                {data && <MovieList movies={data} lastElementRef={lastElementRef} />}
                {loading ? <LoadingCards /> : null}

            </div>
        </div>
    )
}
