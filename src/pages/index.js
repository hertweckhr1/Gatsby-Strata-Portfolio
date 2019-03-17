import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'FoodCycle', description: 'Mobile Application dedicated to reducing food waste using react-native.', link: <a href="https://www.youtube.com/watch?v=HiiiZmzyO-U&t=38s">Video Demo</a>},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Spaghettsi', description: 'Two Week Group Project Completing E-Commerce Website using Ruby on Rails.', link: <a href="https://spagh-ettsi.herokuapp.com/">Website</a>},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'MediaRanker', description: 'Rails Project with learning goals focused on controllers and routes.', link: <a href="https://github.com/hertweckhr1/MediaRanker">Github</a> },
    { id: '4', src: full04, thumbnail: thumb04, caption: 'VideoStore', description: 'Pair Project working with internal and external APIs to create VideoStore Application.', link: <a href="http://retro_videostore.surge.sh/">Website</a>},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Inspiration Board', description: 'Application in React creating http requests to API.', link: <a href="http://inspiration-board.surge.sh/">Website</a>},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'API Muncher', description: 'Project Focused on grabbing recipe information from External API.', link: <a href="https://muncher-mania.herokuapp.com/">Website</a>}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "HannahvanSeeters"
        const siteDescription = "Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header id="major">
                            <h2>Hi, I&apos;m Hannah Rose.</h2>
                        </header>
                        <p>My career path into software development has been non-traditional, diverse, and insightful. With a vast set of experiences including a degree in business management, living around the world, teaching, owning a small food business, managing at a local food cooperative, even farming, I think I would bring a new and interesting perspective to the coding world. My desire has always been to find a career where my apt for mathematics and creativity could be used, paired with an intrigue for learning languages. I am elated to enter into a career after a long search, that challenges and fits me so perfectly.</p>
                        <p>As a long term goal I would love to be part of a team bridging the gap between agriculture and technology, working to solve highly potential global food shortages we face in the future. But on this journey, more than anything, I wish to be apart of a company seeking to make a positive difference in the customers they serve and hope to learn as much as I can in computer software along the way.</p>
                        <ul className="actions">
                            <li><a href="https://gist.github.com/hertweckhr1/960813de7084e57a958f8624ac90cdc6" className="button">See My Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        <ul className="actions">
                            <li><a href="https://gist.github.com/hertweckhr1/" className="button">My Github</a></li>
                        </ul>
                    </section>



                </div>

            </Layout>
        )
    }
}

export default HomeIndex
