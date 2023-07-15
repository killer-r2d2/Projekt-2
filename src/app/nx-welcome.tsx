import {Transition} from '@headlessui/react';
import {useState} from 'react';

export function NxWelcome({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (

<div>
      <button onClick={() => setIsOpen(!isOpen)} className='bg-blue-400'>
        Toggle
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div>
          <p>Hello from inside the transition!</p>
        </div>
      </Transition>
</div>
  );
}

export default NxWelcome;
