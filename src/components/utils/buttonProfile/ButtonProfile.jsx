import React, { useState } from "react";
import "./ButtonProfile.css";
import { resources } from "../../../assets/resources";
import { motion } from "framer-motion";

const Buttonprofile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setSelectedImage(readerEvent.target.result);
      };
    };
    input.click();
  };

  return (
    <div className="button-profile">
      <img src={selectedImage ? selectedImage : resources.user} alt="user" />
      <div className="container-profile">
        {selectedImage && (
          <motion.div className="button-profile-trash">
            <motion.div
              className="delete-icon"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="var(--textPrimary)"
                  stroke="none"
                >
                  <path d="M2005 4806 c-37 -16 -64 -55 -72 -102 l-6 -34 -506 0 -507 0 -35 -36 -34 -35 -3 -282 c-3 -282 -3 -283 20 -317 13 -19 35 -40 48 -47 36 -19 3264 -19 3300 0 13 7 35 28 48 47 23 34 23 35 20 317 l-3 282 -34 35 -35 36 -507 0 -506 0 -6 34 c-8 48 -35 86 -74 102 -47 20 -1063 20 -1108 0z" />
                  <path d="M1062 3676 l-37 -34 -3 -1616 c-3 -1781 -7 -1665 60 -1706 33 -20 46 -20 1478 -20 1432 0 1445 0 1478 20 67 41 63 -75 60 1706 l-3 1616 -37 34 -38 34 -1460 0 -1460 0 -38 -34z m853 -312 c69 -33 65 56 65 -1358 0 -1418 5 -1326 -67 -1360 -44 -21 -163 -22 -204 -1 -16 9 -39 30 -49 48 -19 31 -20 60 -20 1313 l0 1281 23 34 c12 18 34 39 47 46 36 18 165 16 205 -3z m749 1 c70 -34 66 56 66 -1360 0 -1417 5 -1325 -67 -1359 -45 -21 -161 -21 -206 0 -72 34 -67 -58 -67 1359 0 1412 -4 1326 64 1359 42 21 168 21 210 1z m746 2 c13 -7 35 -28 47 -46 l23 -34 0 -1281 c0 -1253 -1 -1282 -20 -1313 -10 -18 -33 -39 -49 -48 -41 -21 -160 -20 -204 1 -72 34 -67 -58 -67 1360 0 1411 -4 1325 63 1358 39 19 171 21 207 3z" />
                </g>
              </svg>
            </motion.div>
          </motion.div>
        )}
        <div
          className="button-profile-modify"
          style={
            selectedImage
              ? {
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  width: "50%",
                }
              : { display: "flex" }
          }
        >
          <motion.div
            className="camera-icon"
            style={
              selectedImage
                ? { height: "44px", width: "70%" }
                : { display: "flex" }
            }
            onClick={() => handleImageUpload()}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {selectedImage ? (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1600.000000pt"
                height="1600.000000pt"
                viewBox="0 0 1600.000000 1600.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
                  fill="var(--textPrimary)"
                  stroke="none"
                >
                  <path d="M7685 14664 c-22 -2 -110 -8 -195 -14 -1288 -89 -2566 -584 -3600 -1394 -404 -317 -829 -742 -1146 -1146 -744 -950 -1220 -2096 -1363 -3285 -38 -315 -46 -454 -46 -825 0 -557 47 -989 162 -1490 281 -1230 890 -2328 1787 -3226 898 -897 1996 -1506 3226 -1787 501 -115 933 -162 1490 -162 557 0 989 47 1490 162 1230 281 2328 890 3226 1787 897 898 1506 1996 1787 3226 103 450 153 865 164 1365 28 1324 -333 2608 -1046 3720 -151 236 -353 512 -504 688 l-50 59 829 829 829 829 -2033 0 -2032 0 0 -2025 c0 -1114 3 -2025 7 -2025 5 0 331 323 726 718 l718 717 30 -35 c17 -19 69 -87 117 -150 841 -1116 1208 -2521 1021 -3910 -155 -1158 -684 -2225 -1514 -3055 -901 -901 -2067 -1440 -3345 -1546 -187 -15 -653 -15 -840 0 -1278 106 -2444 645 -3345 1546 -830 830 -1358 1897 -1514 3055 -33 242 -44 422 -44 710 0 288 11 468 44 710 156 1158 684 2225 1514 3055 767 767 1733 1276 2800 1474 246 46 496 72 838 87 l147 6 0 67 c0 36 -7 305 -15 596 -8 292 -15 563 -15 603 l0 72 -132 -2 c-73 -1 -151 -3 -173 -4z" />
                  <path d="M7715 11985 c-580 -85 -1109 -430 -1415 -924 -147 -237 -246 -510 -285 -784 -19 -132 -19 -422 0 -554 62 -435 258 -826 570 -1138 312 -312 703 -508 1138 -570 132 -19 422 -19 554 0 435 62 826 258 1138 570 312 312 508 703 570 1138 19 132 19 422 0 554 -62 435 -258 826 -570 1138 -312 312 -703 508 -1138 570 -127 18 -438 18 -562 0z" />
                  <path d="M7715 6664 c-22 -2 -110 -9 -195 -15 -975 -69 -1884 -427 -2576 -1015 -107 -90 -334 -312 -334 -326 0 -19 209 -254 346 -390 271 -267 522 -461 848 -655 396 -236 863 -417 1311 -509 312 -64 549 -87 885 -87 336 0 573 23 885 87 696 142 1375 477 1930 951 187 159 575 567 575 603 0 14 -227 236 -334 326 -678 576 -1524 917 -2516 1012 -144 14 -735 27 -825 18z" />
                </g>
              </svg>
            ) : (
              <svg
                width="256"
                height="256"
                viewBox="0 0 256 256"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Creado por Victor Ardila from the Noun Project
                </metadata>
                <g 
                transform="translate(0,256) scale(0.1,-0.1)" 
                stroke="none"
                fill="var(--textPrimary)"
                >
                  <path
                    d="M845 2108 c-49 -27 -85 -73 -106 -137 -35 -108 -28 -105 -253 -111
-188 -5 -193 -6 -233 -32 -24 -16 -49 -44 -62 -70 -21 -44 -21 -54 -21 -606 0
-607 0 -603 53 -660 51 -54 -1 -52 1057 -52 1076 0 1010 -4 1064 60 14 17 30
48 36 68 8 25 10 219 8 603 l-3 565 -28 43 c-47 71 -81 81 -289 81 -209 0
-212 2 -247 111 -21 65 -58 112 -108 138 -30 15 -840 15 -868 -1z m1020 -463
c52 -51 15 -135 -59 -135 -42 0 -76 37 -76 82 0 39 40 78 80 78 19 0 40 -9 55
-25z m-454 -81 c201 -59 349 -256 349 -464 -1 -283 -274 -517 -549 -470 -281
47 -465 320 -396 585 43 164 166 295 325 346 70 23 199 24 271 3z"
                  />
                  <path
                    d="M1207 1410 c-98 -25 -192 -110 -223 -202 -25 -77 -16 -188 22 -258
115 -212 433 -212 548 0 38 70 47 181 21 259 -22 68 -99 152 -164 180 -58 25
-150 34 -204 21z"
                  />
                  <path
                    d="M282 2024 c-24 -17 -29 -53 -10 -72 13 -13 212 -17 242 -6 10 4 16
18 16 40 0 45 -24 54 -138 54 -63 0 -94 -4 -110 -16z"
                  />
                </g>
              </svg>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Buttonprofile;
