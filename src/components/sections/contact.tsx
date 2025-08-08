import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Looking for a technical consultant or need help with your next
          project? Let's talk about how I can help.
        </p>
        <Card className="bg-black/50 border border-purple-500/20">
          <CardContent className="p-6">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-black/50 border-purple-500/20 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/50 border-purple-500/20 focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="bg-black/50 border-purple-500/20 focus:border-purple-500 min-h-[150px]"
                />
              </div>
              <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 glow">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-500 h-5 w-5" />
                  <a
                    href="mailto:eduardohidalgo.dev@gmail.com"
                    className="text-gray-400 hover:text-white"
                  >
                    eduardohidalgo.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-purple-500 h-5 w-5" />
                  <span className="text-gray-400">
                    Available for consulting and freelance
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
