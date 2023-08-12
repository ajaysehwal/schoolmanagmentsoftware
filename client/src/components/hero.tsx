// import React from "react";
import hero from "../assets/images/hero.jpg";
import "../styles/home.css";
import { Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div>
      <div
        style={{ margin: "auto", width: "90%" }}
        id="hero"
        className="grid grid-cols-2 gap-4"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "80%",
              textAlign:"center"
            }}
          >
            <h1
              className="font-bold text-5xl sm:text-3xl md:text-5xl"
              id="headtext"
              style={{ marginBottom: "10px",padding:"10px", }}
            >
              Enterprise Resourse Planning System
            </h1>
            <p
              style={{
                color: "sliver",
                width: "75%",
                margin: "auto",
               
              }}
              id="supporttext"
            >
            Oohr Innovations Private Limited is a company dedicated to furnishing digital platforms for all educational institutions
            </p>
                    <Button id="supporttext" style={{marginTop:"20px"}}>Get Started</Button>
          </div>
        </div>
        <div>
          <img
            className="h-full w-full floating"
            width="100%"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
