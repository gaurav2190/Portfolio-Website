import utilStyles from '../styles/utils.module.css';
const skills = [ "C#, .NET framework, .NET core, Python, Flask","Javascript, JQuery, Nextjs", "Devops, YAML pipelines", "SQL server, MongoDB"];
export default function Skills(){
    return (
        <>
        <div className={utilStyles.containercard}>
            <section>
                <h2 className={utilStyles.headingLg}>Skills</h2>
                <ul className={utilStyles.list}>
                {skills.map((item) => {
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