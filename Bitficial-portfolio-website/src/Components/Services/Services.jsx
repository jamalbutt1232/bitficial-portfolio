import "./Services.scss"
import {animate, motion} from "framer-motion"

function Services() {
 
const variants={
  initials:{
    x: -500,
    y: 100,
opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },
};
  return (
    <motion.div className="services" variants={variants} initial="initials" whileInView="animate">
   <motion.div className="textcontainer" variants={variants} >
   <p>
   Bitficial: Crafting Exceptional Digital Experiences.<br/> From design to deployment, we bring your vision to life
   </p>
   </motion.div>
   <motion.div className="titlecontainer" variants={variants} >
    <motion.div className="title">
      <img src="/people.webp" alt=""/>
      <h1>
        <motion.b whileHover={{color: "purple"}}>Unique</motion.b> ideas
      </h1>
    </motion.div>
    <motion.div className="title">
      <h1>
        <motion.b whileHover={{color:"purple"}}>for your</motion.b> business
      </h1>
      <motion.button whileHover={{scale:1.02}} whileTap={{scale:0.98 }}   >
        What we do? 
      </motion.button>
    </motion.div>
   </motion.div>
   <motion.div className="listcontainer" variants={variants} >
    <motion.div className="box" whileHover={{backgroundColor:"lightgrey", color:"black"}} >
      <h2>
        Branding
      </h2>
      <p>
      Scalable Cloud Tech</p>
      <button>
        Go!
      </button>
     
    </motion.div>
    <motion.div className="box" whileHover={{backgroundColor:"lightgrey", color:"black"}}>
      <h2>
        Branding
      </h2>
      <p>
      Scalable Cloud Tech</p>
      <button>
        Go!
      </button>
      
    </motion.div>
    <motion.div className="box" whileHover={{backgroundColor:"lightgrey", color:"black"}}>
      <h2>
        Branding
      </h2>
      <p>
      Scalable Cloud Tech</p>
      <button>
        Go!
      </button>
      
    </motion.div>
    <motion.div className="box" whileHover={{backgroundColor:"lightgrey", color:"black", }}>
      <h2>
        Branding
      </h2>
      <p>
      Scalable Cloud Tech</p>
      <button>
        Go!
      </button>
     
    </motion.div>
   </motion.div>
    </motion.div>
  );
}

export default Services;