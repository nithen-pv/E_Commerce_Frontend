import Link from "next/link";
import ArticleStyles from "../../styles/Article.module.css";
const articles = ({ articleContent }) => {
  return (
    <>
      <h1 className={ArticleStyles.title}>{articleContent.title}</h1>
      <div className={ArticleStyles.grid}>
        <div
          className={ArticleStyles.card}
          key={articleContent.id}
          style={{ width: "85%" }}
        >
          <h2 style={{ color: "#0070f3" }}>{articleContent.title} &rarr;</h2>
          <p>{articleContent.body}</p>
        </div>
      </div>
      <br />
      <Link href="/">
        <h3 style={{ color: "#0070f3", cursor: "pointer" }}>&larr; Go back </h3>
      </Link>
    </>
  );
};

export default articles;

export const getServerSideProps = async (context) => {
  let articleContent = {};
  await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    .then((response) => response.json())
    .then((json) => {
      articleContent = json;
      console.log(json);
    });
  return {
    props: {
      articleContent,
    },
  };
};
