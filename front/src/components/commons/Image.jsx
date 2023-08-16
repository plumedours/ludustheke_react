import PropTypes from 'prop-types';

function Image(props) {
    const { src, alt, className } = props;
    return (
        <img src={src} alt={alt} className={className} />
    )
};

Image.defaultProps = {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder",
    className: "w-1/2"
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Image;