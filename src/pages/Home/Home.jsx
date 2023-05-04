import homePage from '../../images/homePage.svg.png';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <p className={css.homePageDescription}>
        Hi, this is your PhoneBook. It is designed to help you to keep all of
        your contacts with you. Create your own unique account and get the
        opportunity to manage of your contacts.
      </p>
      <div className={css.imageContainer}>
        <img alt="homePage" src={homePage} width="250"></img>
      </div>
    </div>
  );
};

export default Home;
