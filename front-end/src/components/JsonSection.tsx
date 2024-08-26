import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';

interface JsonObject {
  [key: string]: string | number | boolean | JsonObject | JsonObject[];
}

export function JsonSection(props: { src: JsonObject }) {
  return (
    <section className="relative bg-white shadow-md rounded-lg p-6 max-w-4xl w-full h-fit">
      <JsonView className='overflow-auto h-96' editable src={props.src} theme='vscode' />
    </section>
  );
}
