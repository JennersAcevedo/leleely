import Image from 'next/image'
import styles from '@/styles/home.module.css'
import Navbar from '@/components/navbar'
import ProjectCard from '@/components/cards'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '3px solid #fff',
  }
  // const projects = [
  //   {
  //     tittle: 'Developer portal - BackEnd',
  //     description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the backend of that project. - NODE.JS (NESTJS)',
  //     imageURL: '/portal-back.png',
  //     urlProject: "https://github.com/Jenners20/adm-dev-back"
  //   },
   
  //   {
  //     tittle: 'Stocks - Backend',
  //     description: 'This project is responsible for managing the stocks of a company also sells and purchases. - Nodejs (NESTJS)',
  //     imageURL: '/stocks-back.png',
  //     urlProject: "https://github.com/Jenners20/portfolio"
  //   },
  //   {
  //     tittle: 'Developer portal - FrontEnd',
  //     description: 'This project is responsible for managing the developers and merchants that implement the services of a company that is a payment processor. This is the frontend of that project. - REACT (NEXTJS)',
  //     imageURL: '/portal-front.png',
  //     urlProject: "https://github.com/Jenners20/adm-dev-frontend"
  //   },
  //   {
  //     tittle: 'Stocks - Frontend',
  //     description: 'This project is responsible for managing the stocks of a company also sells and purchases. - REACT (NEXTJS)',
  //     imageURL: '/stocks-front.png',
  //     urlProject: "https://github.com/Jenners20/portfolio"
  //   },
  // ];
  const images = [
    { src: '/image1.png', alt: 'Image 1' },
    { src: '/image2.png', alt: 'Image 2' },
    { src: '/stocks-front.png', alt: 'Image 3' },
    { src: '/image1.png', alt: 'Image 1' },
    { src: '/image2.png', alt: 'Image 2' },
    { src: '/stocks-front.png', alt: 'Image 3' },
];
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
      </div>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.profile}>
            {/* <Image
              src="/profiles.jpg"
              width={70}
              height={70}
              alt="Picture of the author"
              style={imageStyle}
            />
            <span className={styles.social}><a href='https://linktr.ee/jenners_dev'> @leliart</a> </span> */}
          </div>
          {/* <p> Hi, my name is <span className={styles.name}>Leslie Ureña</span></p>
          <p>I'm a <span className={styles.role}>Ilustrator</span>.</p> */}
        </div>
        <div className={styles.tittle}>
          {/* PROJECTS */}
        </div>
        <section id='projects' className={styles.projects}>
        <Gallery images={images} />
          {/* {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))} */}
        </section>
      </main>
      <footer className={styles.footerMain}>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}
