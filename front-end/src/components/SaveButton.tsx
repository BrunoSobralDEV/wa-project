import imgArrowToDown from '../assets/imgs/arrow-to-down.svg';

export function SaveButton(props: { onClick: () => void }) {
  return (
    <button 
      onClick={props.onClick} 
      className='group flex relative items-center justify-center gap-1 h-8 bg-white border border-gray-300 rounded-xl px-5 font-semibold w-full hover:text-[#3A72CE] hover:shadow-lg transition'
    >
      Salvar
      <img 
        className='h-5 absolute right-28 transform -translate-x-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-2' 
        src={imgArrowToDown} 
        alt="Arrow" 
      />
    </button>
  );
}
