import { useState } from "react";

// function App(Props) {
// function App({tittle,topic}) {
//   return (
//     <>
//       <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2 p-16">
//         <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
//           <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
//             <img
//               src="https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg"
//               alt="Revolutionizing Our Production Process"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="p-6 px-2 sm:pr-6 sm:pl-4">
//             <p className="block antialiased font-sans text-sm  leading-normal text-inherit mb-4 font-semibold">
//               {topic}
//             </p>
//             <a
//               href="#"
//               className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
//             >
//               {tittle}
//             </a>
//             <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
//               Learn how our recent investment in new technology has
//               revolutionized our production process, leading to improved
//               efficiency and product quality.
//             </p>
//             <div className="flex items-center gap-4">
//               <img
//                 src="https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg"
//                 className="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg"
//               />
//               <div>
//                 <p className="block antialiased font-sans text-base  leading-relaxed text-blue-gray-900 mb-0.5 font-semibold">
//                   John Doe
//                 </p>
//                 <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
//                   2022-08-15
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


function App(){
      
  let [colors,setColor] = useState("#111");

  return (
    <main className="h-svh text-white flex justify-center items-center gap-3 text-xl" style={{backgroundColor : colors}}>

      <div className="bg-white p-4 rounded-xl flex gap-4 shadow-[0px_0px_5px_0px_black]">
      <button className="bg-white text-black px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("white")}}>White</button>
      <button className="bg-black text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("black")}}>Black</button>
      <button className="bg-red-600 text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("red")}}>Red</button>
      <button className="bg-blue-600 text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("blue")}}>Blue</button>
      <button className="bg-green-600 text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("green")}}>green</button>
      <button className="bg-yellow-600 text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("yellow")}}>yellow</button>
      <button className="bg-gray-600 text-white px-4 py-1 font-bold rounded-xl shadow-[0px_0px_5px_0px_black]" onClick={()=>{setColor("gray")}}>gray</button>
      </div>

    </main>
  )
}


export default App;
