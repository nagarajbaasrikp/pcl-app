import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './App.css'

const Homepage = () => (
    <>
        <div className='jumbotron-wrapper'>
            <div className="jumbotron">
                <h2>Buy Medicines and Essentials</h2>
                <input className='search-bar' type='text' placeholder='Search Medicines' /  >
            </div>
        </div>
         <main>
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
                <div>
                    <p>Med 1</p>
                    <p>Med 2</p>
                    <p>Med 3</p>
                    <p>Med 4</p>
                    <p>Med 5</p>
                </div>
                <div>
                    <p>Symptom 1</p>
                    <p>Symptom 2</p>
                    <p>Symptom 3</p>
                    <p>Symptom 4</p>
                    <p>Symptom 5</p>
                </div>
            </div>
        </main>
    </>
);

export default Homepage