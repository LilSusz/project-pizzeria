import {select, templates} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage(element);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.wrapper.carouselWidget = thisHome.dom.wrapper.querySelector(select.widgets.flickity.carousel);
  }

  initWidgets(){
    const elem = document.querySelector('.main-carousel');

    new Flickity(elem, { /* eslint-disable-line */
        
      contain: true,
      autoPlay: true

    });
  }
}
export default Home;