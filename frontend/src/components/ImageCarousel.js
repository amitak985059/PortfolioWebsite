import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

const ImageCarousel = () => {
    const images = [
        'https://media.gettyimages.com/id/616902766/photo/dedicated-to-software-development.jpg?s=2048x2048&w=gi&k=20&c=JuoYctjy-g4YGD9zr9M58j65PtXmlsM5Ol_AkyMtzjg=',
        'https://imgs.search.brave.com/J1yFn1wzuKRq3j6xBpoPLdCen5_Xp9ubEONvgYX15r8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MTc3MDY5Mi9waG90/by9zb2Z0d2FyZS1k/ZXZlbG9wZXItYXQt/dGhlLW9mZmljZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SmlnSXIwT2lHbVo1/WDlQNVhFQmp4UDVa/M2g5UDFJd1VUeFBW/MkZQRlkwdz0',
        'https://imgs.search.brave.com/voFKGNCdnbcdsljgJqbDz6bjNZoF92Pi35AoLLlhIdQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/OTkyOTAzOC9waG90/by9kZXZlbG9waW5n/LXByb2dyYW1tZXIt/dGVhbS1kZXZlbG9w/bWVudC13ZWJzaXRl/LWRlc2lnbi1hbmQt/Y29kaW5nLXRlY2hu/b2xvZ2llcy13b3Jr/aW5nLWluLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pWW42/ZXUwODRNWHJoZFc4/SkV5SjF2Y0NISWZ5/TWh2bkt5azZBa0Fn/bU1FPQ',
        'https://imgs.search.brave.com/MoL_D_1kv6WF_MY1RhiuhTSHyVB-Vb3ngtJ9_uSME2w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NDkwNjA3NC9waG90/by93ZWItZGVzaWdu/ZXItd29ya2luZy13/aXRoLW11bHRpcGxl/LWRldmljZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVFa/MHB1OU9NZGRDdWpX/cTNfYTFPWlNFSUxL/U21PTnhwWS1hQ1Ey/bXdDa3c9',
    ];
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
