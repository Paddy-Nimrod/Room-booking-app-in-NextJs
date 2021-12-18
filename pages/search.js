import Search from "../components/Search";
import Layout from "../components/layout/Layout";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index(props) {
  return (
    <Layout title="search rooms">
      <Search />
    </Layout>
  );
}
