import Layout from '../../components/layout';
import { getAllBikeNames, getDataById } from '../../db/db';
import { useSelector } from 'react-redux';

export async function getStaticProps({ params }) {
  const bikeData = await getDataById(params.id);
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        bikeData,
      },
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

export default function Post() {
  const bikeData = useSelector((state) => state.bikeData);

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
