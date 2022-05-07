import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RiGithubLine } from 'react-icons/ri';

export default function Footer() {
    return(
        <main className="footer">
            <div className="iconLinks">
                <a href='https://www.linkedin.com/in/gerimae-oliva-x0h378/'><RiLinkedinBoxLine/></a>
                <a href='https://github.com/g0livax27'><RiGithubLine/></a>
            </div>
            <h6>Gerimae Oliva - 2022</h6>
        </main>
    )
};