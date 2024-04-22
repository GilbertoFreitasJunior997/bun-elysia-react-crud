import { Button } from '../ui/button';
import { FaRegCircleUser } from 'react-icons/fa6';
import { LOGIN_FULL_PATH } from '@/router/consts';
import { MdOutlineExitToApp } from 'react-icons/md';
import { Popover } from '../ui/popover';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '@/stores/use-sidebar';

export const Topbar = () => {
  const { setIsOpen, isOpen } = useSidebar();

  const navigate = useNavigate();

  return (
    <aside
      className='flex h-14 items-center justify-between border-b border-b-zinc-200 px-4 py-2'
      style={{
        gridArea: 'topbar',
      }}>
      <div>
        topbar
        <button onClick={() => setIsOpen(!isOpen)}> aaa </button>
      </div>

      <div>
        <Popover
          trigger={
            <Button variant='icon'>
              <FaRegCircleUser />
            </Button>
          }>
          <Button onClick={() => navigate(LOGIN_FULL_PATH)}>
            <MdOutlineExitToApp /> Exit
          </Button>
        </Popover>
      </div>
    </aside>
  );
};
