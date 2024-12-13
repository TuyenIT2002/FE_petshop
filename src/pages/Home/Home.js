import Banner from '~/Layout/components/Banner';
import InfoBar from '~/Layout/components/InfoBar';
import FeatureProduct from '~/Layout/components/FeatureProduct';
import NewProduct from '~/Layout/components/NewProduct';
import BestSellerAndLike from '~/Layout/components/BestSellerAndLike';
function Home() {
    return (
        <>
            <Banner />
            <InfoBar />
            <FeatureProduct />
            <NewProduct />
            <BestSellerAndLike />
        </>
    );
}

export default Home;
