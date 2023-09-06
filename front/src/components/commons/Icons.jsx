import PropTypes from 'prop-types';
import icons from "../../assets/icons/icons.svg";

function Icons(props) {
    const { src, alt, className } = props;
    return (
        <svg className={className} alt={alt}>
            <use xlinkHref={`${icons}${src}`} />
        </svg>
    )
};

Icons.defaultProps = {
    src: "#icon-thumb",
    alt: "Icon Placeholder",
    className: "w-10 h-10"
};

Icons.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icons;