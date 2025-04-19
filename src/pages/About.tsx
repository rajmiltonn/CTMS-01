import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Heart,
  BookOpen,
  ShieldCheck,
  Globe,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import TeacherImage from '@/assets/classroom-teacher.jpg';
import SchoolBuildingImage from '@/assets/school-building.jpg';
import DiverseStudentsImage from '@/assets/diverse-students.jpg';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                About Excellence Academy
              </h1>
              <Separator className="my-4" />
              <p className="text-gray-600">
                Founded in 1995, Excellence Academy has been providing high-quality education for over 25 years.
                We are dedicated to nurturing young minds in a stimulating environment that fosters academic excellence,
                personal growth, and social responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1]">
                  <Link to="/admissions">Join Our School</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#3A59D1] text-[#3A59D1]">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={SchoolBuildingImage}
                alt="Excellence Academy campus"
                className="rounded-lg shadow-lg w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 text-center">Our History</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            For over two decades, Excellence Academy has grown from a small community school to a renowned institution
            that has shaped the lives of thousands of students.
          </p>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">1</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">1995: Foundation</div>
                <p className="text-gray-600">
                  Excellence Academy was founded by Dr. James Peterson with a vision to create a school that would prepare students
                  not just academically but also for life beyond the classroom.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">2</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">2005: Expansion</div>
                <p className="text-gray-600">
                  With increasing enrollment and recognition, we expanded our campus to include state-of-the-art
                  science laboratories, a modern library, and enhanced sports facilities.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">3</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">2015: Innovation</div>
                <p className="text-gray-600">
                  We introduced innovative teaching methodologies and integrated technology into our classrooms,
                  transforming the learning experience for our students.
                </p>
              </div>
            </div>

            <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#3A59D1] text-white shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                <span className="font-bold">4</span>
              </div>
              <div className="ml-8 md:ml-0 md:w-5/12 bg-white p-5 rounded-lg shadow">
                <div className="font-bold text-xl mb-1">Present: Excellence</div>
                <p className="text-gray-600">
                  Today, Excellence Academy stands as a beacon of educational excellence, with alumni making significant
                  contributions in various fields globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Excellence Academy, we are guided by a clear mission and core values that shape everything we do.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide a transformative educational experience that nurtures intellectual curiosity, personal growth,
                and social responsibility, preparing students to lead purposeful lives and make positive contributions to society.
              </p>
              <p className="text-gray-600">
                We believe in the potential of every student and are committed to helping them discover and develop their unique talents
                in a supportive, challenging, and inclusive environment.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  We maintain high academic standards and foster a love for learning that extends beyond the classroom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600">
                  We cultivate empathy and kindness, teaching students to care for others and the world around them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We encourage honesty, ethical behavior, and responsibility in all aspects of life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Citizenship</h3>
                <p className="text-gray-600">
                  We prepare students to thrive in an interconnected world and contribute to global understanding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Mindset</h3>
                <p className="text-gray-600">
                  We embrace challenges as opportunities for learning and development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#3A59D1]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and embrace new approaches to teaching and learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 text-center">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Meet the dedicated professionals who guide our school community with vision and commitment.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                    alt="Dr. Jennifer Wright"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Dr. Jennifer Wright</h3>
                <p className="text-[#3A59D1] font-medium mb-4">Principal</p>
                <p className="text-gray-600 text-center">
                  With over 20 years of experience in education, Dr. Wright leads our school with vision and dedication.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                    alt="Mr. Robert Chen"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Mr. Robert Chen</h3>
                <p className="text-[#3A59D1] font-medium mb-4">Vice Principal, Academics</p>
                <p className="text-gray-600 text-center">
                  Mr. Chen oversees our academic programs, ensuring they meet the highest standards of excellence.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
                    alt="Ms. Aisha Johnson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Ms. Aisha Johnson</h3>
                <p className="text-[#3A59D1] font-medium mb-4">Vice Principal, Student Affairs</p>
                <p className="text-gray-600 text-center">
                  Ms. Johnson is dedicated to creating a supportive environment where all students can thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3A59D1]">
        <div className="container px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our School Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            We invite you to be part of our journey in shaping the future through education.
            Schedule a visit to experience Excellence Academy firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#3A59D1] hover:bg-gray-100">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
