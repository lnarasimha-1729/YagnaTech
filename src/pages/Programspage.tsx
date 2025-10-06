import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const programs = [
  { id: 1, title: "Elite AI Residency Program", description: "Hands-on AI, ML, DL training" },
  { id: 2, title: "Full Stack Web Development", description: "MERN + DevOps Bootcamp" },
];

const ProgramsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-ngo max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Programs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="rounded-xl shadow-md hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle className="text-[#177385]">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button
                  className="bg-[#177385] text-white hover:bg-[#135f6e]"
                  onClick={() => navigate("/programdetail")}
                >
                  Start Program
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPage;
