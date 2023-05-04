import NotFound from '../../images/NotFound.png';
import css from './NotFound.module.css';
const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <img alt="Page not found" src={NotFound} />
    </div>
  );
};

export default NotFoundPage;
