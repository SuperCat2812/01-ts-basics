import axios from "axios";

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
}

interface Post {
  readonly id: number;
  title: string;
  body: string;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
