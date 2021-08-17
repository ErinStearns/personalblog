import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/158756/flowers-plants-korea-nature-158756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </div>
    )
}
