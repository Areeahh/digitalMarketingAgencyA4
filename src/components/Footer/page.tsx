import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">

                <div>
                    <h3>About Us</h3>
                    <p>We are a results-driven digital marketing agency.</p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                   

                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>Email: info@dma.com</p>
                    <p>Phone: +123456789</p>
                </div>

            </div>

        </footer>
    );
}