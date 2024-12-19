import reactlogo from "../assets/react.svg"
import "../index.css"
export  default function Navbar(){
    return(
        <header>
            <nav>
                <img src={reactlogo} href="./assets.svg"></img>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}