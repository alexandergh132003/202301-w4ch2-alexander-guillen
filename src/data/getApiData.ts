interface GiphyData {
  data: { images: { fixed_width_still: { url: string } } };
}

const getApiUrl = async (requestURL: string) => {
  const response = await fetch(requestURL);
  const {
    data: {
      images: {
        fixed_width_still: { url },
      },
    },
  } = (await response.json()) as GiphyData;

  return url;
};

export default getApiUrl;
