import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import intro from './AE1.jpg'
import openingcamera from './opencamera.jpg'
import filmcartridge from './filmcartridge.jpg'
import insertingfilm from './InsertFilm.jpg'
import WindFilm from './windingfilm.jpg'
import takephoto from './takingaphoto.jpg'
import iso from './ISO.jpg'
import sensor from './sensor.jpg'
import aperture from './aperture.jpg'
import unlock from './unlockingfilm.jpg'
import windingup from './winddial.jpg'
import liftdial from './liftdial.jpg'
import 'react-tabs/style/react-tabs.css';
import beginnerguidevideo from './beginnersguidevideo.png'
import filmstockvideo from './filmstockvideo.png'
import isovideo from './isovideo.png'
import developingvideo from './developingvideo.png'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Process = () => {

    const videos = [
        { src: beginnerguidevideo, link: 'https://www.youtube.com/watch?v=Ax4Yn16Rw8s', description: 'Beginners Guide to Film Photography' },
        { src: filmstockvideo, link: 'https://www.youtube.com/watch?v=19JKXymz1n8', description: 'Beginners Guide for Film Stocks'  },
        { src: isovideo, link: 'https://www.youtube.com/watch?v=SSJosqg6wA4&list=PLVVXMHqfPDMHUC5flSnY8AZd61qLTrA1Z', description: 'ISO Information and What to Buy'  },
        { src: developingvideo, link: 'https://www.youtube.com/watch?v=Ty2KqF9Hu1Q', description: 'Developing Your Own Film At Home'  },
      ];


     const { t } = useTranslation();

    return ( 

        <div>
            <div className="process-header">
                <h2>{t('navbar-process')}</h2>
            </div>
        <Tabs> 
            <div className="tab_container">
                <TabList>
                    <div className='left_tab'>
                    <Tab>
                        {t('introduction')}
                    </Tab>
                    <Tab>
                        {t('loading-film')}
                    </Tab>
                    <Tab>
                        {t('taking-photos')}
                    </Tab>
                    <Tab>
                        {t('unloading-film')}
                    </Tab>
                    <Tab>
                        {t('other-resources')}
                    </Tab>
                    </div>
                </TabList>
            </div> 
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>{t('introduction')}</h2>
                        <img src={intro} alt="canon AE-1" />
                        <h3>{t('intro-1')}</h3>
                        <h3>{t('intro-2')}</h3>
                    </div>                    
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>{t('open')}</h2>
                        <img src={openingcamera} alt="opening camera" />
                        <h3>{t('open-1')} </h3>
                        <h3>{t('open-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('insertc')}</h2>
                        <img src={filmcartridge} alt="Inserting Film Cartridge" />
                        <h3>{t('insertc-1')}</h3>
                        <h3>{t('insertc-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('insertf')}</h2>
                        <img src={insertingfilm} alt="insertinf film" />
                        <h3>{t('insertf-1')}</h3>
                        <h3>{t('insertf-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('winding')}</h2>
                        <img src={WindFilm} alt="Winding Film" />
                        <h3>{t('winding-1')}</h3>
                        <h3>{t('winding-2')}</h3>
                    </div>
                    
                    <div className="instruction">
                        <h2>{t('adv')}</h2>
                        <img src={takephoto} alt="Advance Film" />
                        <h3>{t('adv-1')}</h3>
                        <h3>{t('adv-2')}</h3>
                        <h3>{t('adv-3')}</h3>
                    </div>
                    


                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>{t('iso')}</h2>
                        <img src={iso} alt="iso" />
                        <h3>{t('iso-1')}</h3>
                        <h3>{t('iso-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('f-app')}</h2>
                        <img src={sensor} alt="finding aperture" />

                        <h3>{t('f-app-1')}</h3>
                        <h3>{t('f-app-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('app')}</h2>
                        <img src={aperture} alt="aperture" />
                        <h3>{t('app-1')}</h3>
                        <h3>{t('app-2')}</h3>
                    </div>

                    <div className="instruction">
                        <h2>{t('take-photo')}</h2>
                        <img src={takephoto} alt="taking a photo" />
                        <h3>{t('take-photo-1')}</h3>
                        <h3>{t('take-photo-2')}</h3>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>{t('unlock')}</h2>
                        <img src={unlock} alt="unlocking film" />
                        <h3>{t('unlock-1')}</h3>
                        <h3>{t('unlock-2')}</h3>
                    </div>
                    <div className="instruction">
                        <h2>{t('wind')}</h2>
                        <img src={windingup} alt="wind film onto cartridge" />
                        <h3>{t('wind-1')}</h3>
                        <h3>{t('wind-2')}</h3>
                    </div>
                    <div className="instruction">
                        <h2>{t('unload')}</h2>
                        <img src={liftdial} alt="removing film" />
                        <h3>{t('unload-1')}</h3>
                        <h3>{t('unload-2')}</h3>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h3>{t('other-1')}</h3>
                        <h3>{t('other-2')}</h3>
                        <h3>{t('other-3')}</h3>
                        <div className="video-grid">
                            {videos.map((image, index) => (
                                <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                                    <img src={image.src} alt={`Link ${index + 1}`} />
                                    <h3>{image.description}</h3>
                                </a>
                            ))}
                        </div>                        
                    </div>
                </div>
            </TabPanel>
        </Tabs>
        </div>
        

     );
}
 
export default Process;