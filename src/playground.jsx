import React, {useState} from 'react';
import Component from './lib';
import './playgrond.scss';
import './styles/index.scss';

function Playground() {
  const [dt, setDt] = useState('24/05/2019');

  const changeDate = (date) => {
    setDt(date)
  }

  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <Component
        date={dt}
        format="DD/MM/YYYY"
        placeholder="Change date"
        onChange={changeDate}
        isDateDisabled={(dt) => dt.format('YYYY-MM-DD') === '2019-05-24'}
      />
    </div>
  );
}

export default Playground;
