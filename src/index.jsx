/*
 * @Author: Mukti
 * @Date: 2021-08-31 15:08:56
 * @LastEditTime: 2022-02-08 23:12:03
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
        title: el.title,
        artist: el.artist,
        color: el.color_scheme.primary_color_light,
        image: el.singers[0].avatar,
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
  init([
    {
        "all_play_sources": [],
        "albumtitle": "亲爱的...我还不知道",
        "file_ext": "mp3",
        "album": "/subject/2131595/",
        "ssid": "1a3e",
        "title": "喜欢",
        "subtype": "",
        "sid": "708003",
        "color_scheme": {
            "primary_color_light": "#283D35",
            "primary_color_dark": "#283D35"
        },
        "sha256": "05824eaf69e5f66b2df0230fff35fda424c98a7cba93cfaf1048ea7cf538c8a1",
        "status": 0,
        "picture": "https://img2.doubanio.com/view/subject/m/public/s2604331.jpg",
        "update_time": 1624270770,
        "alert_msg": "",
        "is_douban_playable": true,
        "public_time": "2007",
        "partner_sources": [],
        "singers": [
            {
                "style": [],
                "name": "张悬",
                "region": [
                    "台湾"
                ],
                "name_usual": "张悬",
                "related_site_id": 101820,
                "avatar": "https://img9.doubanio.com/img/fmadmin/large/31295.jpg",
                "genre": [
                    "Folk/Country",
                    "Pop"
                ],
                "is_site_artist": false,
                "id": "6777"
            }
        ],
        "copyright_partner_sources": [],
        "artist": "张悬",
        "is_royal": false,
        "is_site_song": false,
        "url": "https://mr1.doubanio.com/5cc7b34d88b9c98e84cf4eb6c77d74f8/0/fm/song/p708003_128k.mp3",
        "length": 279,
        "release": {
            "ssid": "e07d",
            "title": "亲爱的...我还不知道",
            "cover": "https://img2.doubanio.com/view/subject/l/public/s2604331.jpg",
            "link": "https://douban.fm/album/2131595ge07d",
            "singers": [
                {
                    "name": "张悬",
                    "id": "6777"
                }
            ],
            "id": "2131595"
        },
        "aid": "2131595",
        "kbps": "128",
        "available_formats": {
            "64": 2268,
            "128": 4345,
            "192": 6505
        }
    }]);
} else {
  fetch('https://feizhaojun.com/api/public/douban-fm.json').then(res => res.json()).then(res => {
    init(res);
  });
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
