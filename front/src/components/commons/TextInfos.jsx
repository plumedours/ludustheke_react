import PropTypes from 'prop-types';

function TextInfos(props) {
    const { title, content } = props;
    return (
        <div className='flex flex-col text-neutral-700'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

TextInfos.defaultProps = {
    title: "Title",
    content: "Content"
};

TextInfos.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default TextInfos;