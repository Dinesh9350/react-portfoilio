const useBackgroundImg = (imgUrl) => {
  const styles = {
    header: {
      backgroundImage: `url(${imgUrl})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },

    content: {
      height: '100%',
      width: '100%',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      position: 'absolute',
    },
  };
  return styles;
};

export default useBackgroundImg;
