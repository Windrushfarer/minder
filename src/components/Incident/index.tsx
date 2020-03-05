import { useSelector } from 'react-redux';
import React, { useRef, useEffect } from 'react';
import { AppState } from '../../redux/rootReducer';
import { bem } from '../../utils/bem';

import './styles.css';

const b = bem('incident');

export const Incident: React.FC<{}> = () => {
  const incidentRef = useRef<HTMLDivElement>(null);
  const name = useSelector((state: AppState) => state.incident.name);

  useEffect(() => {
    const incidentElement = incidentRef.current;

    if (incidentElement && name) {
      incidentElement.scrollIntoView({ block: 'center', inline: 'center' });
    }
  }, [name]);

  return (
    <div className={b()} ref={incidentRef}>
      <div className={b('name')}>{name || 'Загрузка'}</div>
    </div>
  );
};
