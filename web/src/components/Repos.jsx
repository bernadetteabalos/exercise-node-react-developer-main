/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const Repos = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/repos`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
      });
    return <h1>Repo List</h1>;
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data &&
          data
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(
              ({
                id,
                name,
                description,
                language,
                forks_count,
                created_at,
              }) => (
                <li key={id}>
                  <h3>Name: {name}</h3>
                  <h3>Description: {description}</h3>
                  <h3>Language: {language}</h3>
                  <h3>Forks count: {forks_count}</h3>
                  <h4>Date: {created_at}</h4>
                </li>
              )
            )}
      </ul>
    </div>
  );
};

export default Repos;
