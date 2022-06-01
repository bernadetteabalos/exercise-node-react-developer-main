/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const Repos = () => {
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    fetch(`http://localhost:4000/repos`)
      .then((res) => res.json())
      .then((json) => {
        setData(
          json.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        );
        const filteredLanguages = new Set();
        for (const repo of json) {
          filteredLanguages.add(repo.language);
        }
        setLanguages(Array.from(filteredLanguages.values()));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('ayo', languages);

  return (
    <div>
      <h1>Fetched Data</h1>

      <ul>
        {data
          .filter((repo) => (selected ? repo.language === selected : true))
          .map(
            ({ id, name, description, language, forks_count, created_at }) => (
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
