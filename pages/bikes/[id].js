import Layout from '../../components/layout';
import { getAllBikeNames, getDataById } from '../../db/db';

export async function getStaticProps({ params }) {
  // we are using id as name
  const bikeData = await getDataById(params.id);
  return {
    props: {
      bikeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllBikeNames();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ bikeData }) {
  return (
    <Layout>
      {bikeData.name}
      <br />
      {bikeData.price}
      <br />
      {bikeData.score}
      <br />
      {bikeData.launch_date}
    </Layout>
  );
}
