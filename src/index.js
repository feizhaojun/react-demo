/*
 * @Author: Mukti
 * @Date: 2021-08-31 15:08:56
 * @LastEditTime: 2021-09-03 11:57:09
 * @LastEditors: Mukti
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AudioPlayer from './components/AudioPlayer/Index';
import reportWebVitals from './reportWebVitals';


fetch('https://feizhaojun.com/api/public/douban-fm.json').then(res => res.json()).then(res => {

  const trackList = res.map(el => {
    return {
      title: el.title,
      artist: el.artist,
      color: el.color_scheme.primary_color_light,
      image: el.singers[0].avatar,
      audioSrc: el.url,
    }
  })

  ReactDOM.render(
    <React.StrictMode>
      <AudioPlayer tracks={ trackList } />
      {/* <App /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
