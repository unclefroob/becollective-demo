export const fetchData = () => {
  const output = new Promise(resolve =>
    fetch("https://dev21.becollective.com/api/v2/coding-challenges/dirs")
      .then(res => {
        resolve(res.json());
      })
      .catch(err => {
        console.log(`error: ${err}`);
      })
  );
  return output;
};
