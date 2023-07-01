import Link from "next/link";
import styles from './navbar.module.css';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link href='/'>GK</Link>
                </li>
                <li style={{float:"right"}}>
                    <a href="https://www.linkedin.com/in/gaurav-khatri-2b03b625/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="https://github.com/gaurav2190" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6" />
                    </a>
                </li>
                <li style={{float:"right"}}>
                    <a href="https://medium.com/@gau.kha2190" target="_blank" rel="noopener noreferrer">
                        <FaMedium className="w-6 h-6" />
                    </a>
                </li>
            </ul>
        </div>
    );
}