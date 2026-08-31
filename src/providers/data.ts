import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";

const mockSubjects: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    description: "Covers the fundamentals of computer science, including programming logic, algorithms, and problem-solving techniques.",
    department: "Computer Science",
    createdAt: "2026-08-01T09:00:00.000Z",
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    code: "CS205",
    description: "Explores common data structures, algorithm design, and efficiency analysis for software development.",
    department: "Computer Science",
    createdAt: "2026-08-02T10:30:00.000Z",
  },
  {
    id: 3,
    name: "Business Communication",
    code: "BUS110",
    description: "Develops professional communication skills, report writing, and presentation strategies for business contexts.",
    department: "Business Administration",
    createdAt: "2026-08-03T14:15:00.000Z",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => { throw new Error("this function is not present in mock") },
  update: async () => { throw new Error("this function is not present in mock") },
  create: async () => { throw new Error("this function is not present in mock") },
  deleteOne: async () => { throw new Error("this function is not present in mock") },

  getApiUrl: () => "",
};