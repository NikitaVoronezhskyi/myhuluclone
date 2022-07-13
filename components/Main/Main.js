import Thumbnail from "./Thumbnail/Thumbnail";

const Main = ({ results }) => {
  return (
    <main>
      <ul>
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
