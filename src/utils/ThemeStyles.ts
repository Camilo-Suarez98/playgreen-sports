interface Theme {
  background: string,
  text: string,
  text2: string,
  color1: string,
  color2: string,
  color3: string,
  color4: string,
}

export const darkTheme: Theme = {
  background: "#181828",
  text: "#FFFFFF",
  text2: "#FEFEFE",
  color1: "#2F2F43",
  color2: "#1F1F31",
  color3: "#FFFFFF",
  color4: "#EA596F",
};

export const lightTheme: Theme = {
  background: "#F3F3F3",
  text: "#161617",
  text2: "#232232",
  color1: "#FFFFFF",
  color2: "#F3F3F3",
  color3: "#2067F8",
  color4: "#EA596F",
};