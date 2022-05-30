/* eslint-disable no-console */
import { Router, Request, Response } from 'express';
import data from '../../data/repos.json';
import axios from 'axios';

const getData = () => {
  return axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  let fullData = data;
  res.header('Cache-Control', 'no-store');

  res.status(200);
  const results = await getData().then((resp) => {
    return resp;
  });
  fullData = fullData.concat(results);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const result = fullData.filter((item) => item.fork === false);
  res.json(result);
});
