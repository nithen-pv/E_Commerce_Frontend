import Head from "next/head";
import Products from "../components/Products";
import HomeStyles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={HomeStyles.title}>
        Build with <a>Nest js</a>
      </h1>
      <Products articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  let articles = {};
  await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((json) => {
      articles = json;
      console.log(json);
    });
  return {
    props: {
      articles,
    },
  };
};
