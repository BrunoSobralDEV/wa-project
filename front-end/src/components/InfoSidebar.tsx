import imgPentagono from '../assets/imgs/pentagono-blue.svg';

export function InfoSidebar() {
  return (
    <aside className='flex'>
    {/* <aside className='relative flex flex-col justify-around h-full p-6 gap-4'> */}
      <img src={imgPentagono} alt="Pentagono" className='absolute top-0 left-0 h-[100%]' />
      <div 
        className='border rounded-lg h-fit w-fit 2xl:w-80 p-3 z-10' 
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.55)' }}
      >
        <span className='text-2xl font-black'>Informações</span>
        <ul className='list-disc ml-4'>
          <li>
            Para editar um valor, tente {" "}
            <code className="bg-gray-100 text-red-500 font-mono px-1 rounded">ctrl/cmd + clique</code>
            {" "}para entrar no modo de edição
          </li>
          <li>
            Ao editar/adicionar um valor, tente {" "}
            <code className="bg-gray-100 text-red-500 font-mono px-1 rounded">ctrl/cmd + Enter</code>
            {" "}para enviar alterações
          </li>
          <li>
            Ao editar/adicionar um valor, tente a tecla {" "}
            <code className="bg-gray-100 text-red-500 font-mono px-1 rounded">Esc</code>
            {" "}para cancelar
          </li>
          <li>
            Para criar um Array/Objeto, adicione {" "}
            <code className="bg-gray-100 text-red-500 font-mono px-1 rounded">[] ou {`{}`}</code>
            {" "} e salve. Depois, preencha-o;
          </li>
        </ul>
      </div>
    </aside>
  );
}
