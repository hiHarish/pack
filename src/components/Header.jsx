export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MediCare</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}