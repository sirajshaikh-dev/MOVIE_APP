import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //DOMAIN URL
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDVjYjhkYzZjNjAxYzNmNTRlY2QxNzEyNTMxZTQ5OSIsIm5iZiI6MTczODc3MTYzNy4yNiwic3ViIjoiNjdhMzhjYjU3MzU0MjA4MmI2OWZkZTkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.drTvS9_xfC6kcD2fs3FUV4-EAc2fD9JfrmK2QapPvpY",
  },
});

export default axiosInstance