module.exports = {
  purge: {
    enabled:true,
    content: ["./*.html"]
   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ctaText": "hsl(356, 100%, 66%)",
        "ctaHover": "hsl(355, 100%, 74%)",
        "header": "hsl(208, 49%, 24%)",
        "white": "hsl(0, 0%, 100%)",
        "body": "hsl(207, 13%, 34%)",
        "footer": "hsl(240, 10%, 16%)",
        "lr": "#ff3d54",
        "vlr": "#ff8f70"
      },
      backgroundImage: {
        'patternIntro': "url('../images/bg-pattern-intro.svg'),var(--intro-cta)",
        'patternCircle': "url('../images/bg-pattern-circles.svg'),var(--body-gradient)",
        'bgEditor': "url('../images/illustration-editor-desktop.svg')"
      },
      fontFamily: {
        'overpass': ['Overpass','sans-serif'],
        'ubuntu': ['Ubuntu','sans-serif']
      },
      borderRadius: {
        'extra': "5em"
      },
      transitionProperty: {
        'spacing': "margin, padding"
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
