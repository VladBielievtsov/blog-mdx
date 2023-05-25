import Link from "next/link";
import { Inter } from "next/font/google";
import getPosts from "../utils/getPosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: any) {
  const chunkedArray = [];
  for (let i = 0; i < posts.length; i += 5) {
    chunkedArray.push(posts.slice(i, i + 5));
  }
  return (
    <main className={inter.className + " container mx-auto px-4 flex-1"}>
      <div className="posts">
        {chunkedArray.map((chunk, index) => (
          <div
            className="posts-inner grid grid-cols-4 gap-4 w-full mb-4"
            key={index}
          >
            {chunk.map((item: any, id: number) => (
              <Link
                key={id}
                href={"posts/" + item.slug}
                className="w-full min-h-[200px] bg-[#171724] rounded-md p-4 hover:bg-[#161622]"
              >
                <h2 className="text-2xl">{item.data.title}</h2>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};
