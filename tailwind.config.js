/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg": "#0B0D23",
        "secondary": "rgba(128,137,238,0.1)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      screens: {
        xsm: "340px",
        xmd: "550px",
        xl: "1000px",
      },
      // backgroundImage: (theme) => ({
      //   "hero-image": "url('/fitness_model.png')",
      // }),
      spacing: {
        "imgWidth": "410px",
        "onePage": "780px",
        "maxWidth": "1300px",
        "0%": "0%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "48%": "48%",
        "50%": "50%",
        "52%": "52%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "88%": "88%",
        "90%": "90%",
        "92%": "92%",
        "94%": "94%",
        "95%": "95%",
        "96%": "96%",
        "98%": "98%",
        "100%": "100%",
        "1vh": "1vh",
        "2vh": "2vh",
        "3vh": "3vh",
        "4vh": "4vh",
        "5vh": "5vh",
        "6vh": "6vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "88vh": "88vh",
        "90vh": "90vh",
        "92vh": "92vh",
        "94vh": "94vh",
        "95vh": "95vh",
        "96vh": "96vh",
        "98vh": "98vh",
        "100vh": "100vh",
        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "10vw": "10vw",
        "15vw": "15vw",
        "20vw": "20vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "35vw": "35vw",
        "40vw": "40vw",
        "45vw": "45vw",
        "50vw": "50vw",
        "55vw": "55vw",
        "60vw": "60vw",
        "65vw": "65vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "88vw": "88vw",
        "90vw": "90vw",
        "92vw": "92vw",
        "94vw": "94vw",
        "95vw": "95vw",
        "96vw": "96vw",
        "98vw": "98vw",
        "100vw": "100vw",
      },
    },
  },
  plugins: [],
};
