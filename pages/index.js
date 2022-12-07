import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Coming soon - Floga Decor</title>
                <link rel="icon" href="/leaf.webp" />
            </Head>
            <main style={{height: '60vh'}} className='flex flex-col justify-end bg-[#f8f2e8]'>
                <img src='/leaf.webp' style={{position: 'absolute', right: -200, top: -200}}/>
                <div className='text-center'>

                    <h1 className='text-6xl md:text-7xl lg:text-8xl mb-6' style={{fontFamily: 'Dancing Script', color: '#69524b'}}>Coming Soon</h1>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl' style={{fontFamily: 'Oswald', color: '#69524b'}}>STAY TUNED</h2>
                </div>
            </main>
            <footer style={{height: '40vh'}} className='grid place-items-center bg-[#f8f2e8]'>
                <img src='/logo2.png' alt='logo' className='w-36 md:w-44 lg:w-56 mx-auto' />
            </footer>

        </>
    );
};

export default Home;
