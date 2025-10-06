import React, { useContext } from 'react';
import { Clock, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AssessmentContext } from "../context/AssessmentContext";

const Assesments = () => {
  const { assessments, loading } = useContext(AssessmentContext) || {};

  // Find pre and post assessment for the current user
  const preAssessment = assessments?.find(a => a.type === "pre" && a.setId && a.setId.toLowerCase().includes("ai"));
  const postAssessment = assessments?.find(a => a.type === "post" && a.setId && a.setId.toLowerCase().includes("ai"));

  return (
    <section className="section-padding bg-gradient-subtle py-4">
      <div className="container-ngo">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Assessments
          </h2>
          <p className="mt-2 text-gray-600">
            Test your knowledge before and after completing the program
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pre-Assessment Score */}
          <Card className="rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#177385]">
                <Clock className="h-5 w-5" />
                Pre-Assessment Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Here is your score for the Pre-Assessment. Use this to track your progress and identify areas for improvement.
              </p>
              <div className="flex flex-col items-center justify-center mb-6">
                {loading ? (
                  <span className="text-gray-500">Loading...</span>
                ) : preAssessment ? (
                  <>
                    <span className="text-4xl font-bold text-[#177385]">{preAssessment.score} / 100</span>
                    <div className="flex items-center mt-2">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">Timer: {preAssessment.timer} min</span>
                    </div>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-gray-400">-- / 100</span>
                )}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Multiple choice questions covering basics
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Duration: 30 minutes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Personalized course recommendations
                </li>
              </ul>
              <Button className="bg-[#177385] text-white w-full rounded-lg hover:bg-[#135f6e] transition-colors">
                View Details
              </Button>
            </CardContent>
          </Card>
          {/* Post-Assessment Score */}
          <Card className="rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#177385]">
                <Award className="h-5 w-5" />
                Post-Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Complete the Post-Assessment after finishing the course. Passing
                this assessment will make you eligible for certification.
              </p>
              <div className="flex flex-col items-center justify-center mb-6">
                {loading ? (
                  <span className="text-gray-500">Loading...</span>
                ) : postAssessment ? (
                  <>
                    <span className="text-4xl font-bold text-[#177385]">{postAssessment.score} / 100</span>
                    <div className="flex items-center mt-2">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">Timer: {postAssessment.timer} min</span>
                    </div>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-gray-400">-- / 100</span>
                )}
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Final evaluation of course learnings
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Duration: 45 minutes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Required for certificate issuance
                </li>
              </ul>
              <Button
                className={`w-full rounded-lg ${postAssessment ? "bg-[#177385] text-white hover:bg-[#135f6e]" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
                disabled={!postAssessment}
              >
                {postAssessment ? "Download Certificate" : "Locked – Complete Course First"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Assesments;