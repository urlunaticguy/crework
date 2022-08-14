/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./Week 3 - Cloning Website using Tailwind CSS/**/*.{html,js}",
            "./*.{html,js}",
            "./Week 4 - SignUp Login with JavaScript/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeinout: 'fadeinout 0.5s ease-in 1',
      }, keyframes: {
        fadeinout: {
          '0%': {opacity: 0 },
          '50%': {opacity: 0.5 },
          '100%': {opacity: 1},
        },
      }, colors: {
        'applenav': '#262626', 'indianflagblue': '#000080',
      }
    }, screens: { //this is minimum width
      'midmobiles': '530px','midmobiles1': '630px','midmobiles2': '730px','mq820': '819px','applewebsite': '834px','applewebsite2': '1024px','applewebsite3': '1100px','applewebsite31': '1150px','applewebsite4': '1200px','applewebsite41': '1500px','applewebsite42': '1600px','applewebsite5': '1900px','appleless': {'max': '834px'},
    }, fontSize: {
      'xxxtiny': '.6rem','xxtiny': '.7rem','label1': '0.85rem','buttons': '1rem','label12': '1.4rem','label': '2rem','labelforxxl': '3rem','xltiny': '4.7rem','iconsize': '.9rem','iconsize1': '.75rem','iconsize2': '1.1rem',
    }, margin: {
      'bhalf': '2rem','sizeone': '6rem','sizetwo': '10rem','sizethree': '12rem','sizefour': '16rem','sizefive': '20rem','sizesix': '24rem','sizeseven': '32rem','sizeeight': '40rem','sizenine': '43rem','sizeten': '47rem',
    },
  },
  plugins: [],
}
