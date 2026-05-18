import axios from "axios";

async function fetchPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
}

interface Post {
  readonly id: number;
  title: string;
  body: string;
}

fetchPosts().then((posts: Post[]) => {
  console.log(posts[0].title);
});
