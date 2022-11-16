import LightGallery from 'lightgallery/react';
import galeria1 from "../../assets/galeriap1.jpeg"
import galeria2 from "../../assets/galeriap2.jpeg"

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function MonthlyGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <main>
          <div className="App">
            
            {/* <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={galeria1}>
                    <img alt="img1" src={galeria1} width={200}/>
                </a>
                <a href={galeria2}>
                    <img alt="img2" src={galeria2} width={200}/>  
                </a>
                ...
            </LightGallery> */}
        </div>
        </main>
        
    );
}
