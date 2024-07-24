import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;