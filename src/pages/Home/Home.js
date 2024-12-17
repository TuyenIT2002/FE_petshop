import Banner from '~/Layout/components/Banner';
import InfoBar from '~/Layout/components/InfoBar';
import FeatureProduct from '~/Layout/components/FeatureProduct';
import NewProduct from '~/Layout/components/NewProduct';
import BestSellerAndLike from '~/Layout/components/BestSellerAndLike';
import Blog from '~/Layout/components/Blog';

function Home() {
    return (
        <>
            <Banner />
            <InfoBar />
            <FeatureProduct />
            <NewProduct />
            <BestSellerAndLike />
            <Blog />
        </>
    );
}

export default Home;
