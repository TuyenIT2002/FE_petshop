import Header from '~/Layout/components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

export default DefaultLayout;
