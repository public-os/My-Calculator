import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [theme,setTheme] = useState("light");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Reusable Tailwind classes for perfect circular buttons
  const baseBtn = "flex items-center justify-center text-2xl font-medium rounded-full aspect-square transition-colors duration-100 active:opacity-80 focus:outline-none  hover:scale-110 transition-all duration-300";

  return (
    // Full screen wrapper to center the calculator
    <div className={`${theme} min-h-screen flex flex-col items-center justify-center dark:bg-black`}>
      
      {/* Calculator Body (The iPhone Frame) */}
      <div className="dark:bg-black p-5 w-full max-w-[320px] shadow-2xl">
        <p className='dark:text-white ptext-center font-normal text-4xl hover:scale-110 transition-all duration-300'>
          Calculator         
          <button className="text-xl cursor-pointer"
          onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
          </button>
        </p>

        <p className='dark:text-white text-center hover:scale-110 transition-all duration-300'>using react + tailwindcss</p>
        {/* Display Screen */}
        <div className="dark:bg-black dark:text-white text-4xl font-normal text-right p-4 pb-8 h-22 flex items-end justify-end overflow-hidden">
          <div className="truncate w-full">
            {input || '0'}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          
          {/* Row 1 */}
          <button className={`${baseBtn} dark:bg-zinc-400 dark:text-black bg-blue-200 text-blue-700`} onClick={handleDelete}>⌫</button>
          <button className={`${baseBtn} dark:bg-zinc-400 dark:text-black bg-red-200 text-red-700`} onClick={handleClear}>C</button>
          <button className={`${baseBtn} dark:bg-zinc-400 bg-yellow-400 dark:text-white text-4xl`} onClick={() => handleClick('%')}>%</button>
          <button className={`${baseBtn} bg-orange-500 dark:text-black text-white text-4xl`} onClick={() => handleClick('/')}>÷</button>

          {/* Row 2 */}
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('7')}>7</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('8')}>8</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('9')}>9</button>
          <button className={`${baseBtn} bg-orange-500 dark:text-black text-white text-4xl`} onClick={() => handleClick('*')}>×</button>

          {/* Row 3 */}
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('4')}>4</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('5')}>5</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('6')}>6</button>
          <button className={`${baseBtn} bg-orange-500 dark:text-black text-white text-4xl`} onClick={() => handleClick('-')}>−</button>

          {/* Row 4 */}
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('1')}>1</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('2')}>2</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('3')}>3</button>
          <button className={`${baseBtn} bg-orange-500 dark:text-black text-white text-4xl`} onClick={() => handleClick('+')}>+</button>

          {/* Row 5 */}
          <button className="dark:bg-zinc-800 dark:text-white bg-yellow-100 shadow-2xl col-span-2 !rounded-lg aspect-auto py-1  text-2xl font-medium hover:scale-110 transition-all duration-300 " onClick={() => handleClick('0')}>0</button>
          <button className={`${baseBtn} dark:bg-zinc-800 dark:text-white bg-yellow-100`} onClick={() => handleClick('.')}>.</button>
          <button className={`${baseBtn} bg-orange-500 dark:text-black text-white text-4xl`} onClick={handleCalculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;