import { useState, useEffect, ReactNode } from "react";
import axiosInstance from "../api/axiosInstance";
import { CollegeContext, CollegeContextType, College, Branch } from "./CollegeContext";

export const CollegeProvider = ({ children }: { children: ReactNode }) => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [collegesRes, branchesRes] = await Promise.all([
          axiosInstance.get<College[]>("/college/all"),
          axiosInstance.get<Branch[]>("/college/branch/all")
        ]);
        
        setColleges(collegesRes.data);
        setBranches(branchesRes.data);
      } catch (error) {
        console.error("Failed to fetch college data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addCollege = async (data: Partial<College>): Promise<unknown> => {
    return axiosInstance.post("/college/add", data);
  };

  const addBranch = async (data: Partial<Branch>): Promise<unknown> => {
    return axiosInstance.post("/college/branch/add", data);
  };

  const contextValue: CollegeContextType = {
    colleges,
    branches,
    loading,
    addCollege,
    addBranch
  };

  return (
    <CollegeContext.Provider value={contextValue}>
      {children}
    </CollegeContext.Provider>
  );
};