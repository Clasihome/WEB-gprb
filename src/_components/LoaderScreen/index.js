import { motion } from "framer-motion";
import React, { Fragment } from "react";
import "./loaderScreen.css";

const LoaderScreen = () => {
  return (
    <div className="container-loader">
      <div>
        <motion.div
          style={{
            position: "relative",
            top: "-60px",
            width: 50,
            height: 50,
            margin: 8,
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 50 50"
            style={{ position: "absolute", width: "55px", left: "-90px" }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              flip: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <defs>
              <path
                style={{ margin: "30px" }}
                id="a"
                d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0z"
              />
              <clipPath id="b">
                <use xlinkHref="#a" />
              </clipPath>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                <motion.stop
                  stopColor="#FDB378"
                  animate={{
                    stopColor: [
                      "#DC314F",
                      "#4C1464",
                      "#FC8463",
                      "#FDB378",
                      "#979797",
                      "#FF9662",
                    ],
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8,
                  }}
                  offset="25%"
                />
                <motion.stop
                  stopColor="#FC8463"
                  animate={{
                    stopColor: [
                      "#DC314F",
                      "#FDB378",
                      "#FC8463",
                      "#979797",
                      "#FF9662",
                      "#4C1464",
                    ],
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8,
                  }}
                  offset="50%"
                />
                <motion.stop
                  stopColor="#D4504C"
                  animate={{
                    stopColor: [
                      "#DC314F",
                      "#FC8463",
                      "#FDB378",
                      "#4C1464",
                      "#979797",
                      "#FF9662",
                    ],
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8,
                  }}
                  offset="75%"
                />
                <motion.stop
                  stopColor="#FF7744"
                  animate={{
                    stopColor: [
                      "#DC314F",
                      "#4C1464",
                      "#FC8463",
                      "#FDB378",
                      "#979797",
                      "#FF9662",
                    ],
                  }}
                  transition={{
                    yoyo: Infinity,
                    ease: "linear",
                    duration: 8,
                  }}
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <use
              fill="transparent"
              stroke="url(#linear)"
              strokeWidth="4"
              clip-path="url(#b)"
              xlinkHref="#a"
            />
            <motion.path
              animate={{ rotate: 360 }}
              transition={{
                ease: "easeInOut",
                flip: Infinity,
                repeatDelay: 0,
                duration: 2,
              }}
              d="M 38.364 30.8 a 10.282 10.282 0 0 1 0 -12.6 l 1.438 -1.867 c 1.853 -2.406 1.523 -5.791 -0.761 -7.815 c -2.285 -2.024 -5.776 -2.024 -8.061 0 s -2.615 5.409 -0.762 7.815 l 1.438 1.867 a 10.282 10.282 0 0 1 0 12.6 l -1.438 1.867 c -1.853 2.406 -1.523 5.791 0.762 7.815 s 5.776 2.024 8.061 0 c 2.284 -2.024 2.614 -5.409 0.761 -7.815 z z z"
              fill="#dc314f"
            />
            <motion.path
              animate={{ rotate: 360 }}
              transition={{
                ease: "easeInOut",
                flip: Infinity,
                repeatDelay: 0,
                duration: 2,
              }}
              d="M 18.364 30.8 a 10.282 10.282 0 0 1 0 -12.6 l 1.438 -1.867 c 1.853 -2.406 1.523 -5.791 -0.761 -7.815 c -2.285 -2.024 -5.776 -2.024 -8.061 0 s -2.615 5.409 -0.762 7.815 l 1.438 1.867 a 10.282 10.282 0 0 1 0 12.6 l -1.438 1.867 c -1.853 2.406 -1.523 5.791 0.762 7.815 s 5.776 2.024 8.061 0 c 2.284 -2.024 2.614 -5.409 0.761 -7.815 z z z"
              fill="#FC8463"
            />
          </motion.svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="182.031"
            height="96.085"
            viewBox="0 0 102.031 16.085"
            style={{ position: "absolute", top: "-25px", left: "-30px" }}
          >
            <g
              id="Grupo_2"
              data-name="Grupo 2"
              transform="translate(-119.22 -31.48)"
            >
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.1,
                }}
                id="Path"
                d="M12.014,12.749a4.937,4.937,0,0,1-1.2.953,8.04,8.04,0,0,1-1.793.715,8.16,8.16,0,0,1-2.152.3,7.052,7.052,0,0,1-3.527-.894A6.748,6.748,0,0,1,.9,11.26,8.3,8.3,0,0,1,0,7.328,7.693,7.693,0,0,1,.538,4.409,6.909,6.909,0,0,1,2.092,2.085,7.323,7.323,0,0,1,4.363.536,6.775,6.775,0,0,1,7.053,0,6.88,6.88,0,0,1,9.265.357a6.466,6.466,0,0,1,1.793.953,4.526,4.526,0,0,1,1.2,1.191L10.759,3.991A8.512,8.512,0,0,0,9.085,2.681a3.985,3.985,0,0,0-2.032-.536,4.531,4.531,0,0,0-2.331.6A5.14,5.14,0,0,0,2.929,4.528a5.043,5.043,0,0,0-.657,2.74,5.2,5.2,0,0,0,.717,2.86,4.3,4.3,0,0,0,1.853,1.728,5.933,5.933,0,0,0,2.451.6,4.776,4.776,0,0,0,2.152-.477A4.806,4.806,0,0,0,10.938,10.9Z"
                transform="translate(119.22 32.791)"
                fill="#001421"
              />
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.3,
                }}
                id="Path-2"
                data-name="Path"
                d="M0,15.251V0H2.152V15.251Z"
                transform="translate(133.745 32.076)"
                fill="#001421"
              />
              <g id="Group" transform="translate(137.75 31.361)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  id="Shape"
                  d="M10.879.238V11.021H8.727V9.413a4.508,4.508,0,0,1-1.494,1.251,4.042,4.042,0,0,1-2.271.6,4.716,4.716,0,0,1-2.51-.715A4.577,4.577,0,0,1,.657,8.519,6.559,6.559,0,0,1,0,5.6,6.559,6.559,0,0,1,.657,2.681,5.344,5.344,0,0,1,2.51.715,5.253,5.253,0,0,1,5.26,0,4.022,4.022,0,0,1,7.232.477,5.357,5.357,0,0,1,8.607,1.609V.179h2.271Z"
                  transform="translate(0.179 4.885)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.6,
                  }}
                  id="Path-3"
                  data-name="Path"
                  d="M7.053,2.979a5.307,5.307,0,0,0-1.315-.953,3.148,3.148,0,0,0-1.375-.357,3.539,3.539,0,0,0-.837.119,1.365,1.365,0,0,0-.717.357,1.176,1.176,0,0,0-.3.834,1.186,1.186,0,0,0,.657,1.072,7.271,7.271,0,0,0,1.614.536c.538.179,1.136.357,1.674.6A3.135,3.135,0,0,1,7.77,6.2a2.728,2.728,0,0,1,.538,1.847,2.539,2.539,0,0,1-.6,1.728,3.838,3.838,0,0,1-1.494,1.072A5.193,5.193,0,0,1,4.3,11.2a6.429,6.429,0,0,1-2.331-.417A4.684,4.684,0,0,1,0,9.353L1.435,8.1A4.089,4.089,0,0,0,2.69,9.115a3.912,3.912,0,0,0,1.733.357A3.509,3.509,0,0,0,5.2,9.353a1.548,1.548,0,0,0,.657-.417,1.176,1.176,0,0,0,.3-.834,1.027,1.027,0,0,0-.3-.774,2.458,2.458,0,0,0-.777-.477A7.246,7.246,0,0,0,4,6.553a14.791,14.791,0,0,1-1.733-.6A3.668,3.668,0,0,1,.837,4.945,2.847,2.847,0,0,1,.239,3.1,2.657,2.657,0,0,1,.777,1.43,3.263,3.263,0,0,1,2.212.357,5.192,5.192,0,0,1,4.124,0,5.452,5.452,0,0,1,6.216.417,4.206,4.206,0,0,1,8.069,1.728Z"
                  transform="translate(13.21 5.004)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.7,
                  }}
                  id="Shape-2"
                  data-name="Shape"
                  d="M.358,15.847V5H2.51V15.847Zm0-13.523A1.354,1.354,0,0,1,0,1.37,1.461,1.461,0,0,1,.358.417,1.282,1.282,0,0,1,1.435,0,1.462,1.462,0,0,1,2.51.357a1.35,1.35,0,0,1,.359.953,1.457,1.457,0,0,1-.359.953,1.28,1.28,0,0,1-1.076.418A1.469,1.469,0,0,1,.358,2.324Z"
                  transform="translate(23.909 0.119)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.8,
                    delay: 0.5,
                    delay: 0.8,
                  }}
                  id="Path-4"
                  data-name="Path"
                  d="M5.738,4.23a3.672,3.672,0,0,1,2.271.6A3.458,3.458,0,0,1,9.145,6.434a6.708,6.708,0,0,1,.3,2.264v6.613H7.292V8.817a5.2,5.2,0,0,0-.179-1.43A1.645,1.645,0,0,0,6.4,6.434a1.979,1.979,0,0,0-1.375-.3,3.249,3.249,0,0,0-1.494.357,2.6,2.6,0,0,0-1.016.953A2.339,2.339,0,0,0,2.152,8.7v6.553H0V0H2.152V6.136a5.261,5.261,0,0,1,1.435-1.37A4.6,4.6,0,0,1,5.738,4.23Z"
                  transform="translate(29.587 0.715)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.8,
                    delay: 0.5,
                    delay: 0.9,
                  }}
                  id="Shape-3"
                  data-name="Shape"
                  d="M11,5.6a5.872,5.872,0,0,1-.717,2.919,5.2,5.2,0,0,1-1.972,1.966A5.628,5.628,0,0,1,5.5,11.2a5.628,5.628,0,0,1-2.809-.715A5.2,5.2,0,0,1,.717,8.519,5.715,5.715,0,0,1,0,5.6,5.715,5.715,0,0,1,.717,2.681,5.2,5.2,0,0,1,2.69.715,5.628,5.628,0,0,1,5.5,0,5.628,5.628,0,0,1,8.308.715a5.2,5.2,0,0,1,1.972,1.966A5.715,5.715,0,0,1,11,5.6Z"
                  transform="translate(41.362 4.945)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.8,
                    delay: 1,
                  }}
                  id="Path-5"
                  data-name="Path"
                  d="M5.619,0A3.413,3.413,0,0,1,7.77.6,3.349,3.349,0,0,1,8.906,2.264a3.294,3.294,0,0,1,.837-1.013A4.258,4.258,0,0,1,11.058.357,3.569,3.569,0,0,1,12.672,0a3.484,3.484,0,0,1,2.212.6A2.98,2.98,0,0,1,15.959,2.2a6.708,6.708,0,0,1,.3,2.264v6.494H14.106V4.647a3.6,3.6,0,0,0-.478-1.906,1.911,1.911,0,0,0-1.733-.715A2.662,2.662,0,0,0,9.922,2.8a2.385,2.385,0,0,0-.777,1.847V11.14H6.993V4.587a3.6,3.6,0,0,0-.478-1.906A1.891,1.891,0,0,0,4.9,1.966a2.847,2.847,0,0,0-1.435.357,2.763,2.763,0,0,0-.956.894,2.2,2.2,0,0,0-.359,1.251v6.494H0V.179H2.152V1.906A4.828,4.828,0,0,1,3.527.6,3.717,3.717,0,0,1,5.619,0Z"
                  transform="translate(54.572 4.945)"
                  fill="#001421"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.8,
                    delay: 1,
                  }}
                  id="Shape-4"
                  data-name="Shape"
                  d="M9.982,9.711h0a7.6,7.6,0,0,1-1.853,1.132,5.537,5.537,0,0,1-2.391.477A5.994,5.994,0,0,1,2.75,10.6,5.359,5.359,0,0,1,.717,8.638,5.646,5.646,0,0,1,0,5.779a5.686,5.686,0,0,1,.777-3.1A5.822,5.822,0,0,1,2.809.715,5.407,5.407,0,0,1,5.559,0,4.858,4.858,0,0,1,8.01.655,5.328,5.328,0,0,1,9.8,2.5a5.633,5.633,0,0,1,.657,2.74v.894H2.152a3.664,3.664,0,0,0,1.2,2.323,3.714,3.714,0,0,0,2.57.834A3.416,3.416,0,0,0,7.77,8.877a6.218,6.218,0,0,0,1.136-.834Z"
                  transform="translate(73.042 4.826)"
                  fill="#001421"
                />
              </g>
              <path
                id="Path-6"
                data-name="Path"
                d="M3.228,7.328a3.276,3.276,0,0,0,1.733-.477A3.04,3.04,0,0,0,6.1,5.54a3.9,3.9,0,0,0,.418-1.906A3.667,3.667,0,0,0,6.1,1.787,3.491,3.491,0,0,0,4.961.477,3.276,3.276,0,0,0,3.228,0,3.041,3.041,0,0,0,.418,1.787,3.819,3.819,0,0,0,0,3.634,4.058,4.058,0,0,0,.418,5.54,3.088,3.088,0,0,0,1.554,6.851,2.64,2.64,0,0,0,3.228,7.328Z"
                transform="translate(140.2 38.213)"
                fill="#fff"
              />
              <path
                id="Path-7"
                data-name="Path"
                d="M6.695,3.694a3.9,3.9,0,0,0-.418-1.906A3.632,3.632,0,0,0,5.081.477a3.391,3.391,0,0,0-3.467,0,2.849,2.849,0,0,0-1.2,1.311A3.9,3.9,0,0,0,0,3.694,3.9,3.9,0,0,0,.418,5.6a3.632,3.632,0,0,0,1.2,1.311,3.391,3.391,0,0,0,3.467,0A3.174,3.174,0,0,0,6.276,5.6,3.336,3.336,0,0,0,6.695,3.694Z"
                transform="translate(181.204 38.213)"
                fill="#fff"
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <path
                id="Path-8"
                data-name="Path"
                d="M3.347,0A3.778,3.778,0,0,0,1.2.6,2.749,2.749,0,0,0,0,2.562H6.1V2.443a2.3,2.3,0,0,0-.478-1.251A2.333,2.333,0,0,0,4.6.357,2.215,2.215,0,0,0,3.347,0Z"
                transform="translate(212.943 38.213)"
                fill="#fff"
              />
            </g>
          </motion.svg>
          {/*   <svg
        xmlns="http://www.w3.org/2000/svg"
        width="708.509"
        height="425.342"
        viewBox="0 0 708.509 425.342"
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0,106.254A106.255,106.255,0,0,1-106.254,212.509h0A106.255,106.255,0,0,1-212.508,106.254h0A106.255,106.255,0,0,1-106.254,0h0A106.255,106.255,0,0,1,0,106.254"
              transform="translate(0 -0.299) rotate(180)"
              fill="#dc314f"
            />
          </clipPath>
          <linearGradient
            id="b"
            x1="0.724"
            y1="0.244"
            x2="0.278"
            y2="0.695"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ff7c59" />
            <stop offset="0.219" stop-color="#fc7b58" />
            <stop offset="0.628" stop-color="#fd8a5d" />
            <stop offset="1" stop-color="#ffaf6b" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="0.176"
            y1="0.176"
            x2="0.762"
            y2="0.762"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#dc314f" />
            <stop offset="1" stop-color="#ff9662" />
          </linearGradient>
        </defs>
        <g transform="translate(-408.692 -21.715)">
          <path
            d="M0,106.254A106.255,106.255,0,0,1-106.254,212.509h0A106.255,106.255,0,0,1-212.508,106.254h0A106.255,106.255,0,0,1-106.254,0h0A106.255,106.255,0,0,1,0,106.254"
            transform="translate(691.201 340.5) rotate(90)"
            fill="#dc314f"
          />
          <path
            d="M-31.122,31.121a106.251,106.251,0,0,1,0,150.265h0a106.254,106.254,0,0,1-150.266,0h0a106.253,106.253,0,0,1,0-150.265h0A105.922,105.922,0,0,1-106.255,0h0A105.919,105.919,0,0,1-31.122,31.121"
            transform="translate(1054.378 378.161) rotate(90)"
            fill="none"
          />
          <path
            d="M-31.122,31.121a106.251,106.251,0,0,1,0,150.265h0a106.254,106.254,0,0,1-150.266,0h0a106.253,106.253,0,0,1,0-150.265h0A105.922,105.922,0,0,1-106.255,0h0A105.919,105.919,0,0,1-31.122,31.121"
            transform="translate(1054.378 378.161) rotate(90)"
            fill="none"
          />
          <path
            d="M-300.778,106.25a193.918,193.918,0,0,1,137.543,56.967,193.88,193.88,0,0,1,56.974,137.529L0,194.5a193.917,193.917,0,0,1-137.544-56.967A193.875,193.875,0,0,1-194.516,0Z"
            transform="translate(798.07 21.715) rotate(-45)"
            fill="url(#b)"
          />
          <path
            d="M-300.778,106.25a193.918,193.918,0,0,1,137.543,56.967,193.88,193.88,0,0,1,56.974,137.529L0,194.5a193.917,193.917,0,0,1-137.544-56.967A193.875,193.875,0,0,1-194.516,0Z"
            transform="translate(798.07 21.715) rotate(-45)"
            fill="url(#c)"
          />
          <path
            d="M0,106.254A106.255,106.255,0,0,1-106.254,212.509h0A106.255,106.255,0,0,1-212.508,106.254h0A106.255,106.255,0,0,1-106.254,0h0A106.255,106.255,0,0,1,0,106.254"
            transform="translate(1117.201 340.5) rotate(90)"
            fill="#ff9662"
          />
        </g>
      </svg>

     */}{" "}
          {/*  <div>
        <div className="cssload-dots">
          <div className="cssload-dot"></div>
          <div className="cssload-dot"></div>
          <div className="cssload-dot"></div>
          <div className="cssload-dot"></div>
          <div className="cssload-dot"></div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="12"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
                result="goo"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </Fragment> */}
        </motion.div>
      </div>
    </div>
  );
};

export default LoaderScreen;
