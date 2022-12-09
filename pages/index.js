import Head from "next/head";

const links = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/floga.decor/',
        icon: 'instagram',
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/flogadecor/',
        icon: 'facebook',
    },
]

const Home = () => {
    return (
        <>
            <Head>
                <title>Coming soon - Floga Decor</title>
                <link rel="icon" href="/leaf.webp" />
            </Head>
                <main className='flex items-center flex-col justify-center' style={{ height: "100vh", width: "100vw", background: '#f8f2e8'}}>
                    <img alt='' src='/leaf.webp' style={{position: 'fixed', right: -200, top: -200}}/>
                    <img src='/logo2.png' alt='logo' className='w-36 md:w-44 lg:w-56 mx-auto mb-24' />
                    <div className='text-center mb-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl mb-6' style={{fontFamily: 'Dancing Script', color: '#69524b'}}>Welcome &<br/>thanks for scanning</h1>
                        <h2 className='text-2xl md:text-2xl lg:text-4xl' style={{fontFamily: 'Oswald', color: '#69524b'}}>FOLLOW US ON SOCIAL MEDIA</h2>
                    </div>
                    <ul className='flex flex-col gap-4'>
                        {links.map(({name, link, icon}) => (
                            <li key={name} className='flex items-center gap-2'>
                                <a href={link} target
                                ='_blank' rel='noreferrer' className='text-2xl md:text-3xl lg:text-5xl' style={{fontFamily: 'Oswald', color: '#69524b'}}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </main>

        </>
    );
};

export default Home;
