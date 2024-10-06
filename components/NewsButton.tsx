// "use client"

// // components/Button.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaNewspaper } from 'react-icons/fa';

// const Button = () => {
//     const [isClicked, setIsClicked] = useState(false);

//     return (
//         <motion.div
//             className="fixed bottom-4 right-4 flex items-center"
//             animate={{ x: isClicked ? 200 : 0 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//         >
           
//             {isClicked && (
//                 <motion.span
//                     className="ml-4 text-lg font-semibold text-blue-500"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Latest news
//                 </motion.span>
//             )}
//         </motion.div>
//     );
// };

// export default Button;
