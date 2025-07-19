import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import exportIcon from '../../assets/icons/export.png';
import Navbar from '../navBar/navBar';
import phishnet from "../../assets/phishnet.png";
import bloodIcon from "../../assets/blood4u.jpg";
import amityIcon from "../../assets/amity.png"
export default function Home() {
  const slides = [
    {
      slug: 'phishnet',
      title: 'PhishNet-Nepal',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.',
      img: phishnet,
      github: 'https://github.com/srjnnn/PhishNet-Nepal',
      live: 'https://www.phishnet.srijankharel.com.np/',
    },
    {
      slug: 'blood4life',
      title: 'Blood4Life',
      description:
        'How Blood4Life is Saving Lives by building a strong donor base in communities.',
      img: bloodIcon,
      github: 'https://github.com/srjnnn/Blood4Life',
      live: 'https://blood4life.live',
    },
        {
      slug: 'amity-app',
      title: 'Amity App',
      description:
        'A school management application developed by high school students, now being used by 300+ students and teachers',
      img: amityIcon,
      github: 'https://github.com/srjnnn/School-Management',
      live: 'https://amity.kharaayo.com',
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <>
        <Navbar />,
      <div className="carousel-container">
        <h2>
          <span className="red">Our Recent</span>{' '}
          <span className="blue">Projects</span>
        </h2>

        <div className="carousel">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
              <div className="card-hover">
                <img src={slide.img} alt={slide.title} />
                <div className="hover-overlay">
                  <Link to={`/projects/${slide.slug}`} className="see-more">See More</Link>
                </div>
              </div>

              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <div className="buttons">
                <a href={slide.github} target="_blank" rel="noreferrer">GitHub Repository
                  <img src={exportIcon} alt="Export Icon" className="icon" />
                </a>
                <a href={slide.live} target="_blank" rel="noreferrer">See Live
                  <img src={exportIcon} alt="Export Icon" className="icon" />
                </a>
              </div>
            </div>
          ))}

          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </>
  );
}
