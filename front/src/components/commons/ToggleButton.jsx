import { useDarkMode } from './DarkModeContext';

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`relative inline-block w-10 h-6 ${darkMode ? 'bg-neutral-900' : 'bg-neutral-300'} rounded-full p-1`}>
      <button
        onClick={toggleDarkMode}
        className={`absolute inset-y-0 left-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform ${
          darkMode ? "transform translate-x-full bg-neutral-300" : "bg-neutral-500"
        }`}
      >
        {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 text-gray-800' viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z"/></svg>
        ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 text-yellow-400' viewBox="0 0 24 24"><path fill="currentColor" d="M11 5V1h2v4h-2Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425L17.65 7.75ZM19 13v-2h4v2h-4Zm-8 10v-4h2v4h-2ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35L6.35 7.7Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75L19.05 20.5ZM1 13v-2h4v2H1Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7l-2.85 2.85ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16Zm0-4Z"/></svg>
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
