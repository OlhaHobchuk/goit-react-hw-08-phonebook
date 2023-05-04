import { MutatingDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <MutatingDots
        height="100"
        width="100"
        color="#8a8a5c"
        secondaryColor="#b8b894"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
