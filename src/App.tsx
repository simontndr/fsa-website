import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardCarousel from './components/CardCarousel'
import SingleCardCarousel from './components/SingleCardCarousel'
import { useState,useEffect } from 'react'
import {CardProps} from './components/Types'

/*ADD EVENT LISTENER TO REFRESH WHEN ROTATING PAGE*/
function App() {

  const francescaInfo: CardProps = {
    imageUrl: './src/images/francesca.jpg',
    imageAlt: 'photo of Francesca Agdipa',
    cardTitle: 'Francesca Agdipa',
    cardSubtitle: 'Co-President',
    cardText: "Hello everyone! I'm a third year of zoology student. I joined FSA because of my love for my culture, and desire to create a 'home away from home' for everyone. It's awesome to bring people together, whether they're Filipino or just curious about our traditions, and to share the warmth and hospitality that I know UOGFSA for. "
  }

  const simonInfo: CardProps = {
    imageUrl: './src/images/simont.jpg',
    imageAlt: 'photo of Simon Tenedero',
    cardTitle: 'Simon Tenedero',
    cardSubtitle: 'Co-President',
    cardText: "Hey there! I'm a second year Software Engineering major. I'm a big fan of Kali Uchis, and love collecting Jellycats, Sonny Angels, and Calico Critters. I joined FSA to learn more about my culture, and to use my programming experience to make a positive impact on my school community."
  }

  const isabelleInfo: CardProps = {
    imageUrl: './src/images/isabelle.png',
    imageAlt: 'photo of Isabelle Viray',
    cardTitle: 'Isabelle Viray',
    cardSubtitle: 'Photographer',
    cardText: "Hi! I’m in my third year of Culture and Technology Studies! I love collecting silly little trinkets, keychains, and anything in between, and I absolutely eat up anything ube-flavoured <3. Being apart of UOGFSA means meeting new friends and celebrating our culture through events and activities— and I joined to capture exactly that :)"
  }

  const danInfo : CardProps = {
    imageUrl: './src/images/dan.jpg',
    imageAlt: 'photo of Dan Bayudan',
    cardTitle: 'Dan Bayudan',
    cardSubtitle: 'Outreach Coordinator',
    cardText: "Hi everyone! I'm a third year Political Science student. I enjoy playing video games, eating outside, and sleeping in. I also have a dog named Lushi that will likely make some appearances through our virtual events! I joined the FSA to help cultivate and introduce Filipino culture to a wider audience! If anyone wants OPM (Original Pinoy Music) recs, let me know!"
  }

  const adelInfo : CardProps = {
    imageUrl: './src/images/adel.jpg',
    imageAlt: 'photo of Adel Caringal',
    cardTitle: 'Dan Caringal',
    cardSubtitle: 'Events Coordinator',
    cardText: "Hi! I’m a 2nd year international student majoring in Psychology. Three words to describe myself would be curious, adventurous, and outgoing! I love hanging out with people, but also enjoy time alone in nature from time to time. I joined UOGFSA to organize fun and unforgettable events that will continue to make Filipino culture, hospitality, and love known and alive to everyone."
  }

  const ethanInfo : CardProps = {
    imageUrl: './src/images/ethan.jpg',
    imageAlt: 'photo of Ethan Carreon',
    cardTitle: 'Ethan Carreon',
    cardSubtitle: 'Treasurer',
    cardText: "Hey! I'm going into my second year of Mechanical Engineering and when I’m not studying I love to play my guitar, play video games, and enjoy long walks on the beach. I joined UOGFSA to get involved in the school community as well as get to know as many other pinoy students that I can! Cant wait to see all of you at our future events!"
  }

  const arielleInfo: CardProps = {
    imageUrl: './src/images/arielle.jpeg',
    imageAlt: 'photo of Arielle Enriquez',
    cardTitle: 'Arielle Enriquez',
    cardSubtitle: 'Head of Marketing',
    cardText: "Hi! I’m in my 3rd year of the Psychology program. This is my 2nd year being the head of marketing! I originally joined the executive team because I was looking for a community of people on campus who I share the same culture with. It’s really comforting to have this group who I know I can relate to when I’m far from home."
  }

  const joshuaInfo : CardProps = {
    imageUrl: './src/images/joshua.jpg',
    imageAlt: 'photo of Joshua',
    cardTitle: 'Joshua Sanitago',
    cardSubtitle: 'Jr. Events Coordinator',
    cardText: "Hi there! I'm in my second year of bio-medicial science and love playing volleyball. I joined this organization to get out of my comfort zone and meet new people. I also wanted to help incoming first year students feel welcome and give them a sense of community on campus."
  }

  const generalInfo: CardProps = {
    imageUrl: './src/images/person-silo.png',
    imageAlt: 'photo of you!',
    cardTitle: 'You!',
    cardSubtitle: 'General Member',
    cardText: "The most important part of our association is our general members! Without your passion and participation in our events, we wouldn't have any success! Thank you for all the kindness!"
  }

  const execInfo : CardProps[] = [simonInfo,francescaInfo,adelInfo,danInfo,ethanInfo,arielleInfo,isabelleInfo,joshuaInfo, generalInfo]


  let [fullCarouselVisibility,setFullCarouselVisiblity] = useState(false);

  
  const handleResize = () => {
    if (window.innerWidth > 1010){
      setFullCarouselVisiblity(true);
    }
    else {
      setFullCarouselVisiblity(false);
    }
  }

  useEffect(() => {

    handleResize();
    window.addEventListener('resize',handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <Navbar/>
    <main>
      <div id="hero-section">
        <div id="welcome-message">
            <h1>Your<br />UOG &#10022; FSA</h1>
            <span>University of Guelph<br />Filipino Student Association</span>
        </div>
      </div>
      <div id="about-section">
        <h2>About</h2>
        <article id='about-article'>
            <section>
                <p>
                  Welcome to UOGFSA, your home away from home!
                  We are a student-run organization committed to promoting the lush culture of the Phillipines.
                  By sharing our rich traditions and history, we wish to show the importance of diversity and inclusion.
                  Through successful events and initiatives, we have fostered a vibrant and warm community, where numerous students of different backgrounds unite to become advocates, enacting positive change. 
                  As executives, we are passionate and uplifting leaders who constantly seek ways to improve, so that we may better achieve our goal.   

                </p> 
            </section>
            <figure>
                <picture>
                    <source media="(max-width: 450px)" srcSet='./src/images/fsaGroupPhoto-small.JPG' width='250' />
                    <source media="(max-width: 1000px)" srcSet='./src/images/fsaGroupPhoto-medium.JPG' width='400' />
                    <img src='./src/images/fsaGroupPhoto.JPG' alt='group photo of FSA' width='800'/>
                </picture>
                <figcaption>Group photo from our 2023 Christmas Event</figcaption>
            </figure>
        </article>
      </div>
      <div id="team-section" >
        <h2>Meet the<br/>&#10022; team</h2>
        {fullCarouselVisibility?<CardCarousel cardsInfo={execInfo}/>:<SingleCardCarousel cardsInfo={execInfo}/>}
      </div>
      <div id='why-join-section'>
        <h2>Why join?</h2>
        <article id='why-join-article'>
          <p>
          Joining UOGFSA is a fantastic way to enrich your university experience through developing a supportive network.
          Beyond cultural exploration, we are always pursuing opportunities to foster friendships and build bridges between different communities. 
          Everyone is welcome to join; we are always open to people of different backgrounds — not just Filipinos! 
          Joining is free, and there is minimal commitment! You choose which events you want to attend.
          </p>    
          <p>
            Please fill out this <a href='https://forms.office.com/pages/responsepage.aspx?id=K6Fivq0soUml-oX08xVqfYjP3BtLtBJMtxyoKQXcxChUQzQ0Q05KSTVISjYxNFY0NENGOVZTRUlBQi4u' target='_blank'>google form</a> if you wish to become a member of our club.
            Thanks for looking through what we have to offer; hope to see you at our next event!
          </p>
        </article>
        
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
