import {pageLinks, socialLinks} from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
        {pageLinks.map((link)=> {
            return (
                <li key={link.id}>
                <a href={link.href} className="footer-link"> {link.text}</a>
                </li>
            );
        })}
    </ul>
    <ul className="footer-icons">
        {socialLinks.map((icon)=> {
                    const {id,href,className} = icon
                    return (
                        <li key={id}>
                            <a 
                            href={href} 
                            className="footer-icon"
                            target='_blank'
                            rel='noreferrer'>
                                <i className={className}></i>
                            </a>
                        </li>
                    )
        })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}
export default Footer