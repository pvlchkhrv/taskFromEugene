import axios from 'axios';
const SEARCH_ENDPOINT = 'https://api.github.com/search/repositories?q=react';

export const getReactRepositories = () => axios.get(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((repos) => repos.map(({forks, name, stargazers_count, html_url}) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url,
    })))
