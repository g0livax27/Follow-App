import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RiGithubLine } from 'react-icons/ri';

export default function Footer() {
    return (
        <main className="footer">
            <img src={require(`../../assets/mylogo.png`)} alt='my logo' />
            <div className="iconLinks">
                <a href='https://www.linkedin.com/in/gerimae-oliva-x0h378/'><RiLinkedinBoxLine /></a>
                <a href='https://github.com/g0livax27'><RiGithubLine /></a>
            </div>
        </main>
    )
};