import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Profile(){
    return (
        <>
        <div className={utilStyles.container}>
            <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={200}
                width={200}
                alt=""
                />
                <h1 className={utilStyles.heading2Xl} style={{marginTop:"auto"}}>Gaurav Khatri</h1>
        </div>
        <div className={utilStyles.containercard}>
            <section className={utilStyles.headingMd}>
                <p>I am a full stack developer based in India. I have interest in exploring and integrating Machine learning technologies into applications.</p>
            </section>
        </div>
            
        </>
    );
}