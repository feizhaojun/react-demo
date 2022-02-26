/*
 * @Author: Mukti
 * @Date: 2021-08-31 15:08:56
 * @LastEditTime: 2022-02-26 13:58:03
 * @LastEditors: Mukti
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AudioPlayer from './components/AudioPlayer/Index';
import reportWebVitals from './reportWebVitals';

const init = (res) => {
  const trackList = [];
  res.forEach(el => {
    if (!el.delete) {
      trackList.push({
        album: el.album,
        img: `https://feizhaojun.com/api/img?url=${el.img}`,
        year: el.year,
        title: el.title,
        artist: el.artist,
        color: el.color,
        avatar: el.avatar,
        audioSrc: el.url,
      });
    }
  })

  ReactDOM.render(
    <React.StrictMode>
      <AudioPlayer tracks={ trackList } />
      {/* <App /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (process.env.NODE_ENV === 'development') {
  fetch('/web/douban-fm/douban-fm.json').then(res => res.json()).then(res => {
    init(res);
  });
} else {
  fetch('https://feizhaojun.com/api/public/douban-fm.json').then(res => res.json()).then(res => {
    init(res);
  });
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
