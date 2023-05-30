import { Outlet } from 'react-router-dom';

export default function BasicLayout() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
