import imgLogo from '../assets/imgs/logo.svg';
import imgGithub from '../assets/imgs/github.svg';
import imgComputer from '../assets/imgs/computer.svg';

export function Header() {
  return (
    <header className="p-4 flex justify-between w-full">
      <span className="flex items-center text-sm font-bold drop-shadow gap-x-3">
        <img className="h-16" src={imgLogo} alt="Logo" />
        <h1 className='text-2xl'>JSON Builder</h1>
      </span>
      <div className="flex gap-2 items-center">
        <a 
          className="bg-[#3A72CE] text-white p-2 rounded-lg h-10 hover:shadow-3xl transition" 
          href="https://github.com/brunosobraldev" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={imgGithub} alt="GitHub" className='h-6 filter invert' />
        </a>
        <button className="bg-[#3A72CE] text-white p-2 rounded-lg h-10 hover:shadow-3xl transition">
          <img src={imgComputer} alt="Computer" className='h-6 filter invert' />
        </button>
      </div>
    </header>
  )
};
