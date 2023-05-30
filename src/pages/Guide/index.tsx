import { FC } from 'react';
import { Link } from 'react-router-dom';

const Guide: FC = () => {
  return (
    <ul className="flex h-full w-full list-disc flex-col items-center justify-center">
      <li>
        <Link to={'/base'} style={{ fontSize: 24, color: 'blue' }}>
          01-基础
        </Link>
      </li>
      <li>
        <Link to={'/panda'} style={{ fontSize: 24, color: 'blue' }}>
          02-大熊猫世界
        </Link>
      </li>
    </ul>
  );
};

export default Guide;
