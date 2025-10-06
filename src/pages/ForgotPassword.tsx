import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/YagnaTechWM.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // TODO: Call your forgot password API here
    // Example:
    // await forgotPassword({ email });
    setTimeout(() => {
      setMessage("If this email is registered, a reset link has been sent.");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="container-ngo max-w-md mx-auto py-8">
        <Card className="card-ngo border-0 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Forgot your password?</CardTitle>
            <CardDescription>
              Enter your registered email address below<br />
              We&apos;ll send instruction to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                  disabled={loading}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#177385] to-[#1bbf8a] text-white font-semibold"
                size="lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Resend Link"}
              </Button>
            </form>
            {message && (
              <div className="text-green-700 text-center text-sm">{message}</div>
            )}
            <div className="text-center mt-4">
              <Button variant="link" className="text-[#177385] font-semibold p-0 h-auto" asChild>
                <Link to="/login">Back to Login</Link>
              </Button>
            </div>
            <div className="text-center mt-2 text-xs text-muted-foreground">
              Never share your password with anyone
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;