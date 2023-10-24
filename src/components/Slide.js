import { motion } from 'framer-motion';

export default function Slide({ title, content }) {
  return (
    <>   
      <h1 style={{ textAlign: 'center', flexGrow: 1, marginBottom: '5em'  }}>{title}</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>{content}</p>
    </>        
  );
}