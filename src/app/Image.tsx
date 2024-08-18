import Image from 'next/image';
import PropTypes from 'prop-types';

type BorderImageProps = {
  src: string;
  alt?: string;
};

const BorderImage: React.FC<BorderImageProps> = ({ src, alt = 'Profile' }) => {
  return (
    <div className="relative flex-1 flex justify-center">
      <div className="relative group" style={{ width: '400px', height: '400px' }}>
        <div className="absolute inset-0 border-4 border-blue-500 rounded-lg transition-transform duration-500 ease-in-out group-hover:translate-x-[-50px] group-hover:translate-y-[-50px]" />
        <div className="absolute" style={{
            top: '30px',
            left: '30px',
            right: '-30px',
            bottom: '-30px',
            border: '4px solid blue',
            borderRadius: '10px',
            pointerEvents: 'none',
            transition: 'transform 0.5s ease-in-out'
        }}
        />
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="transform transition-transform duration-500 ease-in-out group-hover:translate-x-[-50px] group-hover:translate-y-[-50px] rounded-lg"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </div>
  );
};

BorderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default BorderImage;
