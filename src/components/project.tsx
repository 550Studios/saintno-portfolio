/**
 *This file include project showcase UI for my portfolio in react
 */

import { component$ } from "@builder.io/qwik";

interface IProject {
  name: string;
  link: string;
  image: string;
  description: string;
}

export const ProjectShowCase = component$<{ projects: IProject[] }>(
  ({ projects }) => {
    return (
      <div class="flex w-full flex-row h-screen items-center justify-center relative snap-start m-auto">
        {projects.map((project) => (
          <div class="flex flex-col items-center justify-center">
            <a href={project.link}>
              <img src={project.image} alt={project.name} />
            </a>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
);

export {};
