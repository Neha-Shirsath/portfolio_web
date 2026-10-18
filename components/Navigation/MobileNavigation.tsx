import * as React from "react";
import { cubicBezier, motion } from "framer-motion";


const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTansition = {
  duration: 1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/Neha-Shirsath"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
           
            <a
              href="https://www.linkedin.com/in/neha-shirsath-692039372/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
            
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:nehashirsath308@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://netflixgpt-be9f7.web.app/"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/NetflixGimg-nav.png" alt="netflixGemini" />
            <h2>
              NetflixGemini
            </h2>
          </a>
          <a
            href="https://smart-class-landing-page-roan.vercel.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/snap-landing-nav.png" alt="smartClass" />
            <h2>SmartClass</h2>
          </a>
          <a
            href="https://velora-orcin-nu.vercel.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img className="velora-img" src="webp/veloraimg-nav.png" alt="velora" />
            <h2>
              Velora
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
