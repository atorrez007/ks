// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// function ThemeSwitcher({ children }: any) {
//   const [mounted, setMounted] = useState<boolean>(false);
//   // const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // useEffect(() => {
//   //   const testFunc = () => {
//   //     theme === "dark"
//   //       ? console.log("theme is dark")
//   //       : console.log("theme is light");
//   //   };
//   //   testFunc();
//   // }, [theme]);

//   if (!mounted) {
//     return <>{children}</>;
//   }

//   return (
//     <>
//       {/* The current theme is: {theme} */}
//       {/* <div>
//         <button onClick={() => setTheme("light")}>Light Mode</button>
//         <button onClick={() => setTheme("dark")}>Dark Mode</button>
//       </div> */}
//     </>
//   );
// }

// export default ThemeSwitcher;
