import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";


const Certificate = () => {
  return (
   <section className="section-padding bg-gradient-subtle py-4">
  <div className="container-ngo">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
      My Certificates
    </h2>

    {/* Certificate Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Elite AI Residency Program",
          date: "Completed on January 30, 2026",
          id: "CERT2026AI001",
        },
        {
          title: "AI Frontier Plus Program",
          date: "Completed on August 15, 2025",
          id: "CERT2025WEB123",
        },
        {
          title: "AI Frontier Program",
          date: "Completed on June 10, 2025",
          id: "CERT2025UI456",
        },
      ].map((cert, index) => (
        <Card
          key={index}
          className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
        >
          {/* Header */}
          <div className="bg-gradient-hero p-4 text-center">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-gray-200">{cert.date}</p>
          </div>

          {/* Body */}
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
            {/* Seal / Icon */}
            <div className="w-14 h-14 rounded-full bg-[#177385]/10 flex items-center justify-center">
              <Award className="h-8 w-8 text-[#177385]" />
            </div>

            {/* Certificate ID */}
            <p className="text-sm text-gray-600">
              Certificate ID: <span className="font-medium">{cert.id}</span>
            </p>

            {/* Action Button */}
            <Button
              size="sm"
              className="bg-gradient-hero text-white px-4 py-2 rounded-lg hover:bg-[#177385] transition-colors"
            >
              Download Certificate
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


  )
}

export default Certificate