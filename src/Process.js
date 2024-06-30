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

const Process = () => {

    const videos = [
        { src: beginnerguidevideo, link: 'https://www.youtube.com/watch?v=Ax4Yn16Rw8s', description: 'Beginners Guide to Film Photography' },
        { src: filmstockvideo, link: 'https://www.youtube.com/watch?v=19JKXymz1n8', description: 'Beginners Guide for Film Stocks'  },
        { src: isovideo, link: 'https://www.youtube.com/watch?v=SSJosqg6wA4&list=PLVVXMHqfPDMHUC5flSnY8AZd61qLTrA1Z', description: 'ISO Information and What to Buy'  },
        { src: developingvideo, link: 'https://www.youtube.com/watch?v=Ty2KqF9Hu1Q', description: 'Developing Your Own Film At Home'  },
      ];

    return ( 

        <Tabs> 
            <div className="tab_container">
                <TabList>
                    <div className='left_tab'>
                    <Tab>
                        Introduction
                    </Tab>
                    <Tab>
                        Loading Film
                    </Tab>
                    <Tab>
                        Taking Photos
                    </Tab>
                    <Tab>
                        Winding Film
                    </Tab>
                    <Tab>
                        Other Resources
                    </Tab>
                    </div>
                </TabList>
            </div> 
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>Introduction</h2>
                        <img src={intro} alt="canon AE-1" />
                        <h3>This section is dedicated to get you starting with film photography or at least pique your intrest for getting into film photography. </h3>
                        <h3>All instructions given are for the Canon AE-1 however, the general concept is the same on many cameras, espesially of this era </h3>
                    </div>                    
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>Step 1 - Opening Camera</h2>
                        <img src={openingcamera} alt="opening camera" />
                        <h3>In order to load the film first you have to open the camera. </h3>
                        <h3>There should be a wheel on the top of your camera with no markings, you pull this up until the back of the camera opens up.</h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 2 - Inserting Film Cartridge</h2>
                        <img src={filmcartridge} alt="Inserting Film Cartridge" />
                        <h3>Once the back is open insert the film cartridge below the wheel you just lifted with the film portion facing the middle. </h3>
                        <h3>Once in place push the wheel down to lock the film in place.</h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 3 - Inserting Film</h2>
                        <img src={insertingfilm} alt="insertinf film" />
                        <h3>Take the tab of film and pull it to the other side of the camera.</h3>
                        <h3>Insert the end of the film into the slot on the winding mechanism. </h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 4 - Winding Film</h2>
                        <img src={WindFilm} alt="Winding Film" />
                        <h3>With the back still open, press the capture film button and use the film winder to advance the film twice.</h3>
                        <h3>Ensure that the teeth in the camera are alligned with the holes.</h3>
                    </div>
                    
                    <div className="instruction">
                        <h2>Step 5 - Advancing Film</h2>
                        <img src={takephoto} alt="Advance Film" />
                        <h3>Close your camera back and repeat the process of capturing image and winding until the photo inicator is at 0.</h3>
                        <h3>The next photo you take will actually be captured on the film.</h3>
                        <h3>Optional: Some cameras have a slot on the back to put a piece of the box to remind you what film you are using.</h3>
                    </div>
                    


                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>Step 1 -Setting ISO</h2>
                        <img src={iso} alt="iso" />
                        <h3>Before taking the first photo in your roll of film you must figure out what ISO it says, mine is 200.</h3>
                        <h3>Locate where you set your ISO on your camera, mine is done by lifting this dial and twisting until the line is on 200.</h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 2 - Figuring Out Aperture</h2>
                        <img src={sensor} alt="finding aperture" />

                        <h3>The Canon AE-1 and others are manual aperture so you have to set how much light enters the camera.</h3>
                        <h3>On my camera looking through the viewfinder while half holding the capture image button shows me the aperture.</h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 3 -Setting Aperture</h2>
                        <img src={aperture} alt="aperture" />
                        <h3>Once you know the aperture you can set the aperture on the lens of the camera.</h3>
                        <h3>If the sensor tells you it is too high or low you may have to set the shutter length.</h3>
                    </div>

                    <div className="instruction">
                        <h2>Step 4 -Taking a Photo</h2>
                        <img src={takephoto} alt="taking a photo" />
                        <h3>Once the brightness is correctly set you can now take a photo by pressing the capture photo button.</h3>
                        <h3>Once the camera has taken the photo advance the film forward with the winder.</h3>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h2>Step 1 - Unlocking the Film.</h2>
                        <img src={unlock} alt="unlocking film" />
                        <h3>Once the indicator shows you are at your limit and you can't wind any more photos the film has to be unloaded.</h3>
                        <h3>On my camera there is a button at the bottom you press first to unlock the film from the winding mechanism.</h3>
                    </div>
                    <div className="instruction">
                        <h2>Step 2 - Winding the Film</h2>
                        <img src={windingup} alt="wind film onto cartridge" />
                        <h3>Now on the same dial as opening the camera if you flip out this arm you can start winding.</h3>
                        <h3>This camera has an arrow for the direction you spin. Spin until there is no resistance and then do a few extra spins</h3>
                    </div>
                    <div className="instruction">
                        <h2>Step 3 - Unloading the Film</h2>
                        <img src={liftdial} alt="removing film" />
                        <h3>Now like inserting the film lift the dial up. This will open the back and release the film.</h3>
                        <h3>You are done with this roll. You can put a new one in, and/or take this film to be devloped.</h3>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="instructions">
                    <div className="instruction">
                        <h3>While this section should help you get started and generate interest into film photography, it barely scratches the surface of what you can learn</h3>
                        <h3>Below are links to videos to help you learn even more info</h3>
                        <h3>These are great videos to give you more in depth info and help you to get started with less headaches</h3>
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

     );
}
 
export default Process;