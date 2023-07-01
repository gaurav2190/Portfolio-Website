import utilStyles from '../styles/utils.module.css';
const hobbies = [ "Sketching", "Travelling, Cycling"];
export default function Hobbies(){
    return (
        <>
        <div className={utilStyles.containercard}>
            <section>
                <h2 className={utilStyles.headingLg}>Hobbies</h2>
                <ul className={utilStyles.list}>
                {hobbies.map((item) => {
                    return <li className={utilStyles.listItem}>
                                {item}
                            </li>
                }            
                )}
                </ul>
            </section>
        </div>
        </>
    )
}