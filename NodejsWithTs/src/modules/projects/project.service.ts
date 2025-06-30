import { Project } from "@prisma/client";
import prisma from "../../database/db";
import EntityNotFoundError from "../../errors/EntityNotFoundError";

export const getProject = async (id: string):Promise<Project | null> => {
  const project = await prisma.project.findUnique({
    where: { id },
  });
  return project;
};


export const listProject=async():Promise<Project[]>=>{
    const list=await prisma.project.findMany()
    return list
}
