import React, { Component } from "react";
import Image from "next/image";
import { Section } from "../atomics/Section";
import { Project } from "../atomics/Project";
import myData from "./../../../public/projects.json";
 
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  link: string;
  github: boolean;
  language: string[];
  prompt: string[];
}

interface ProjectsProps {
  bgColor: string;
  projects: Project[];
}

export const Projects = ({ bgColor, projects }: ProjectsProps) => {
  projects = myData.project;
  return (
    <Section bgColor={bgColor}>
      <span>Projekte</span>
      <div className="grid grid-cols-3 justify-items-center grid-flow-column  gap-8 pb-16 pt-16">
      {projects.slice(0, 6).map((p, i) => {
          return (
            <div className="mb-8">
              <Project
                id={p.id}
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                github={p.github}
                link={p.link}
                img={p.img}
                language={p.language}
                open={false}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};
