import GeneralList from "./GeneralList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GeneralList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16" key={item.id}>
              <h2
                className="text-[20px] text-textColor 
                font-bold"
              >
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
