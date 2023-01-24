import axios from "axios";
const BASE_URL = "https://api.github.com";

export async function getUserData(userName) {
    const userInfo = await axios.get(`${BASE_URL}/user/${userName}`);


   console.log(userInfo);
    return userInfo
}

export async function getUserRepo(userName) {
    const repos = await axios.get(`${BASE_URL}/user/${userName}/repos`);

    console.log(repos);
    return repos

}