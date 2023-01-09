import Script from "next/script";

const ThemeScript = () => {
  return (
    <Script id="theme-script" strategy="afterInteractive">
      {`
  const localStorageTheme = localStorage.getItem('theme');

  if(localStorageTheme){
    if(localStorageTheme === "DARK"){
      document.querySelector('body').className = "DARK";
    }else{
      document.querySelector('body').className = "LIGHT";
    }
  }

  else{
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(osTheme){
      document.querySelector('body').className = "DARK";
    }else{
      document.querySelector('body').className = "LIGHT";
    }
  }
`}
    </Script>
  );
};

export default ThemeScript;
