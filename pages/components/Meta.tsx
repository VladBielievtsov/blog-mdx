import Head from "next/head";

interface MetaProps {
  title: string;
  tags: string[];
}

export default function Meta({ title, tags }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={tags.join(", ")} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Props",
  tags: [""],
};
