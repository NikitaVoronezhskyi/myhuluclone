import Thumbnail from "./Thumbnail/Thumbnail";

const Main = ({ results }) => {
  return (
    <main>
      <ul className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
