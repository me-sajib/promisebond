import React from "react";
import { Users, Lock, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1dbf73] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About PromiseBond</h1>
          <p className="text-xl">
            Revolutionizing the future of digital promises
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              PromiseBond is pioneering a new way to create, trade, and fulfill
              digital promises. We believe in a future where commitments can be
              tokenized, traded, and tracked transparently.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Users className="h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="font-semibold">Community First</h3>
                  <p className="text-gray-600">
                    Building a trusted network of promise makers and takers
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="font-semibold">Secure & Transparent</h3>
                  <p className="text-gray-600">
                    Every transaction is recorded and verified
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe className="h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="font-semibold">Global Access</h3>
                  <p className="text-gray-600">
                    Connect with promise makers worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Innovative Platform</h3>
              <p className="text-gray-600">
                First-of-its-kind platform for trading future promises
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Trust System</h3>
              <p className="text-gray-600">
                Built-in reputation system ensures reliability
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple interface for creating and trading bonds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
