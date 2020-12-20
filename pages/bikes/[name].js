import Layout from '../../components/layout';
import { getAllBikeNames, getDataByName } from '../../db/db';
import { useSelector } from 'react-redux';

export async function getStaticProps({ params }) {
  const singleBike = await getDataByName(params.name);
  return {
    props: {
      initialReduxState: {
        currentBike: singleBike,
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
  const currentBike = useSelector((state) => state.currentBike);

  return (
    <Layout>
      {currentBike.name}
      <br />
      {currentBike.price}
      <br />
      {currentBike.score}
      <br />
      {currentBike.launch_date}
    </Layout>
  );
}
