/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        B2:"#85969F",
        B3: '#C8CDD9',
        b11:"#1D2D39",
        B4:"#DCE5EE",
        B5:"#F7F2F2",
        neutral800:"#170F49",
        PrimaryGreen:"#00D299",
        ancientGreen:"#00DFB6",
        black11:"#375268",
        BFB:"#BFB6B6",
        SecondaryBlue:"#009AFF",
        DeleteRed:"#DE2D2D",
        CloseBlue:"#1C274C",
        PrimaryBlue:"#0054FF",
        EOrange:"#FF5823",
        LightGreen:"#C9FFF5",
        LightBrown:"#322A2A",
        DentoRed:"#FF3434",
        OptionBlack:"#090202",
        CaribbeanGreen:"#A0FAD6"
      },
    },
  },
  
  plugins: [],
}