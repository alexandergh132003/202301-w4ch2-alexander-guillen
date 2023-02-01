import { async } from "q";
import { useEffect, useState } from "react";
import getApiUrl from "../../data/getApiData";
import SearchForm from "../SearchForm/SearchForm";

const App = () => {
  const [category, changeCategory] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const callbackFunction = (dataFromChild: string) => {
    changeCategory(dataFromChild);
  };

  const greatAlexanderKey = "ju5ZxYItrdWhubdWy8Ocru0D0ZJKJ2nt";
  const requestApi = `https://api.giphy.com/v1/gifs/random?api_key=${greatAlexanderKey}&tag=${category}`;

  useEffect(() => {
    (async () => {
      setImageUrl(await getApiUrl(requestApi));
    })();
  }, [requestApi]);

  return (
    <div className="container">
      <SearchForm passedCallBack={callbackFunction} />

      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src={imageUrl} className="gif" alt="gif" />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
