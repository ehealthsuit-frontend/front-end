const Image = ({ src, alt, className }) => (
    <img
      src={src}
      alt={alt}
      className={`rounded ${className}`}
    />
  );
  
  export default Image;