import React from "react";
import FloatingText from "../HelperComponents/FloatingText";
import ScrollReveal from "../HelperComponents/ScrollReveal";

export default function Intro() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-8 flex-col mt-24">
        {/* Floating Heading */}
        <div className="text-2xl md:text-4xl uppercase text-center">
          {/* <FloatingText
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
          </FloatingText> */}
          Welcome to <span className="text-5xl logo">Iconiq</span>
        </div>
        {/* ScrollReveal paragraphs */}
        <div className="container mx-auto space-y-12">
          <ScrollReveal
            key="para1"
            baseOpacity={0.1}
            baseRotation={0}
            blurStrength={40}
            wordAnimationEnd="center center"
            rotationEnd="center center"
            containerClassName=""
            textClassName="text-[clamp(1rem,3.3vw,1.9rem)] font-light text-center leading-relaxed text-neutal-700 "
          >
            At Iconiq, we specialize in helping brands grow digitally through
            strategic marketing, immersive design, and scalable web solutions.
            Whether you're launching a startup or refreshing a global brand, our
            team brings creative firepower, technical precision, and a bold
            vision for the future.
          </ScrollReveal>

          <ScrollReveal
            key="para2"
            baseOpacity={0.1}
            baseRotation={0}
            blurStrength={40}
            wordAnimationEnd="center center"
            rotationEnd="center center"
            containerClassName=""
            textClassName="text-[clamp(1rem,3.3vw,1.9em)] font-light text-center leading-relaxed text-neutral-700"
          >
            Our services span the entire digital landscape — from branding that
            speaks volumes, to custom websites that drive conversions, to
            marketing campaigns that spark engagement. We believe in
            collaboration, creativity, and delivering results that move the
            needle.
          </ScrollReveal>

          <ScrollReveal
            key="para3"
            baseOpacity={0.1}
            baseRotation={0}
            blurStrength={40}
            wordAnimationEnd="center center"
            rotationEnd="center center"
            containerClassName=""
            textClassName="text-[clamp(1rem,3.3vw,1.9rem)] font-light text-center leading-relaxed text-neutral-700"
          >
            With a cross-disciplinary team of designers, developers, and
            strategists, Iconiq empowers businesses to thrive in the digital
            age. Every pixel, every line of code, every campaign — crafted with
            purpose, passion, and precision.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
