import React, { useRef } from "react";
import { motion,animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.jpg";



const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
  
    const animationClientsCount = () => {
      animate(0, 1, {
        duration: 1,
        onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
      });
    };
    const animationProjectsCount = () => {
      animate(0, 4, {
        duration: 1,
        onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
      });
    };

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };


    return (
        <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Madhu Kumari
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Coder", "A Learner"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="madhuiiest@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
             
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
            
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
               
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    4
                  </motion.span>
            
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>madhuiiest@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="madhu" />
      </section>
      <BsChevronDown />
    </div>
    )
}

export default Home
