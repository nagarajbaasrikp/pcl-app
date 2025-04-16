import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import myImg from './images/anotherbpmonitor.png';
import myImg2 from './images/anotherglucometer.png';
import myImg3 from './images/bpmonitor.png';
import myImg4 from './images/btbpmonitor.png';
import myImg5 from './images/glucometer.png';
import myImg6 from './images/multivitamin.png';
import myImg7 from './images/oxymeter.png';
import myImg8 from './images/weighingscale.png';

import './App.css';

const NotSearchResults = () => (
    <div>
        <div className='shortcuts'>
                <span>
                    <div>
                        <img src='https://images.apollo247.in/pub/media/store_icon_image.png?tr=w-120,q-100,f-webp,c-at_max' alt='Error' />
                    </div>
                    <div>
                        <p>Pharmacy Near Me</p>
                        <p>Find Store</p>
                    </div>
                    <div>
                        <ChevronRightIcon />
                    </div>
                </span>
                <span>
                    <div>
                        <img src='https://images.apollo247.in/images/ui_revamp_orderviaprescription.svg?tr=w-120,q-100,f-webp,c-at_max' alt='Error' />
                    </div>
                    <div>
                    <p>Get 15% off on Medicines</p>
                    <p>Upload Now</p>
                    </div>
                    <ChevronRightIcon />
                </span>
                <span>
                    <div>
                        <img src='https://images.apollo247.in/images/ui_revamp_hospitalVisit.svg?tr=w-120,q-100,f-webp,c-at_max' alt='Error' />
                    </div>
                    <div>
                        <p>Hospital Visit</p>
                        <p>Pre-book</p>
                    </div>
                    <ChevronRightIcon />
                </span>
                <span>
                    <div>
                        <img src='https://images.apollo247.in/images/ui_revamp_video_consult.svg?tr=w-120,q-100,f-webp,c-at_max' alt='Error' />
                    </div>
                    <div>
                        <p>Video Consult</p>
                        <p>In 15 Minutes</p>
                    </div>
                    <ChevronRightIcon />
                </span>
                <span>
                    <div>
                        <img src='https://images.apollo247.in/images/ui_revamp_labtest.svg?tr=w-120,q-100,f-webp,c-at_max' alt='Error' />
                     </div>
                    <div>
                        <p>Lab Tests</p>
                        <p>At Home</p>
                    </div>
                    <ChevronRightIcon />
                </span>
            </div>
            <div className='link'>
                <img src='https://images.apollo247.in/images/category/consult_doctor_symtom_checker_web_new..jpeg?tr=w-1276,q-60,f-webp,dpr-1.1100000143051147,c-at_max' alt='Error' />
            </div>
            <div className='medicines'>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <div className='submedicines'>
                        <div>
                            <div className='img_container'>
                                <img src={myImg} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Omron HEM 7120 Fully Automatic Digital Blood Pressure Monitor</p>
                                <p>This device offers accurate blood pressure measurements with Intellisense technology, ensuring comfort and precision.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                                <img src={myImg2} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Dr. Morepen BG-03 Gluco One Glucometer</p>
                                <p>A reliable glucometer that provides quick and accurate blood glucose readings, essential for diabetes management.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                                <img src={myImg3} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Healthgenie Weight Machine for Body Weight</p>
                                <p>A sturdy weighing scale with a thick tempered glass and LCD display, ideal for monitoring body weight.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                               <img src={myImg4} alt='error' /> 
                            </div>
                            <div className='text_container'>
                                <p>Dr Trust USA Professional Series Finger Tip Pulse Oximeter</p>
                                <p>This device measures oxygen saturation and pulse rate, providing quick and accurate readings.</p>
                            </div>
                        </div>
                    </div>
                    <div className='submedicines'>
                        <div>
                            <div className='img_container'>
                                <img src={myImg5} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>HealthSense Ultra-Lite PS 126 Digital Personal Body Weighing Scale</p>
                                <p>A lightweight and durable weighing scale with step-on technology and error indicators.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                                <img src={myImg6} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Accu-Chek Instant Blood Glucose Glucometer</p>
                                <p>A glucometer with Bluetooth connectivity, offering accurate blood sugar testing with instant results.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                                <img src={myImg7} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Garden of Life Vitamin Code Multivitamin for Women</p>
                                <p>Tailored for women's health, this multivitamin includes high B12 and iron content.</p>
                            </div>
                        </div>
                        <div>
                            <div className='img_container'>
                                <img src={myImg8} alt='error' />
                            </div>
                            <div className='text_container'>
                                <p>Renzo's Picky Eater Vegan Multivitamin for Kids</p>
                                <p>A vegan multivitamin designed for children, ensuring essential nutrient intake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
);

export default NotSearchResults