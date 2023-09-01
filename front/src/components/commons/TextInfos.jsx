import PropTypes from 'prop-types';
import { useDarkMode } from './DarkModeContext';

function TextInfos(props) {

    const { darkMode } = useDarkMode();
    const { title, content } = props;

    return (
        <div className={`flex flex-col ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
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