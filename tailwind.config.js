/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./Week 3 - Cloning Website using Tailwind CSS/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'applenav': '#262626',
      }
    }, screens: {
      'midmobiles': '530px',
      'midmobiles1': '630px',
      'midmobiles2': '730px',
      'applewebsite': '834px', //this is minimum width
      'applewebsite2': '1045px',
      'applewebsite3': '1100px',
      'applewebsite31': '1150px',
      'applewebsite4': '1200px',
      'applewebsite41': '1500px',
      'applewebsite42': '1600px',
      'applewebsite5': '1900px',
      'appleless': {'max': '834px'},
    }, fontSize: {
      'xxxtiny': '.6rem',
      'xxtiny': '.7rem',
      'label1': '0.85rem',
      'buttons': '1rem',
      'label12': '1.4rem',
      'label': '2rem',
      'labelforxxl': '3rem',
      'xltiny': '4.7rem',
      'iconsize': '.9rem',
      'iconsize1': '.75rem',
      'iconsize2': '1.1rem',
    }, margin: {
      'bhalf': '2rem',
      'lol': '6rem',
      'lol1': '10rem',
      'lol2': '12rem',
      'lol3': '16rem',
      'lol4': '20rem',
      'lol41': '24rem',
      'lol5': '32rem',
      'lol6': '40rem',
      'lol61': '43rem',
      'lol7': '47rem',
    },
  },
  plugins: [],
}
