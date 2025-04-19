import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Trophy, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';

// Import images
import HeroImage from '@/assets/school-building.jpg';
import ClassroomImage from '@/assets/classroom.jpg';
import LibraryImage from '@/assets/library.jpg';
import ScienceLabImage from '@/assets/science-lab.jpg';
import SportsFieldImage from '@/assets/sports-field.jpg';
import TeacherImage from '@/assets/classroom-teacher.jpg';
import DiverseStudentsImage from '@/assets/diverse-students.jpg';
import StudentsThumbsUpImage from '@/assets/students-thumbsup.jpg';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <img
            src={HeroImage}
            alt="School building"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
            <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl hero-text">
              Welcome to Excellence Academy
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/90 hero-text">
              Nurturing minds, building character, and inspiring excellence in education since 1995.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#3A59D1] hover:bg-[#2A49C1] dark:bg-blue-600 dark:hover:bg-blue-700">
                <Link to="/admissions">Admissions Open</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Book a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">About Our School</h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Excellence Academy is dedicated to providing an outstanding educational experience that fosters
                academic excellence, personal growth, and social responsibility in a supportive and stimulating
                environment.
              </p>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Our approach combines rigorous academics with a rich array of extracurricular activities,
                ensuring that students develop both intellectually and as well-rounded individuals ready to
                make positive contributions to society.
              </p>
              <Button asChild variant="outline" className="gap-1 text-[#3A59D1] border-[#3A59D1] dark:text-blue-300 dark:border-blue-700">
                <Link to="/about">
                  Learn More <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 grid gap-4 grid-cols-2">
              <img
                src={TeacherImage}
                alt="Teacher with students"
                className="rounded-lg object-cover h-60 w-full"
              />
              <img
                src={DiverseStudentsImage}
                alt="Diverse students collaborating"
                className="rounded-lg object-cover h-60 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">Academic Excellence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Our curriculum combines traditional academic rigor with innovative teaching methods to inspire a
              lifelong love of learning in every student.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={ClassroomImage}
                  alt="Modern classroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Book className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Comprehensive Curriculum</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                  Our balanced curriculum develops critical thinking and creativity across all subject areas.
                </p>
                <Link to="/academics" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                  Explore Curriculum <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={LibraryImage}
                  alt="School library"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Trophy className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Academic Achievements</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                  Our students consistently excel in national competitions and standardized tests.
                </p>
                <Link to="/academics" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                  View Achievements <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover-effect dark:bg-gray-900 dark:border-gray-800">
              <div className="h-48 overflow-hidden">
                <img
                  src={ScienceLabImage}
                  alt="Science laboratory"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-5 w-5 text-[#3A59D1] dark:text-blue-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Dedicated Faculty</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                  Our experienced teachers are committed to nurturing each student's unique potential.
                </p>
                <Link to="/about" className="text-sm font-medium text-[#3A59D1] hover:underline inline-flex items-center gap-1 dark:text-blue-300">
                  Meet Our Teachers <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">World-Class Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Our campus provides state-of-the-art facilities designed to enhance the learning experience and support
              student development in all areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={ClassroomImage}
                alt="Modern classrooms"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Modern Classrooms</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={LibraryImage}
                alt="Extensive library"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Extensive Library</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={ScienceLabImage}
                alt="Science laboratories"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Science Laboratories</h3>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-lg group">
              <img
                src={SportsFieldImage}
                alt="Sports facilities"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">Sports Facilities</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="gap-1 text-[#3A59D1] border-[#3A59D1] dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-950/50">
              <Link to="/facilities">
                View All Facilities <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">What Our Community Says</h2>
            <p className="text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
              Hear from our parents and students about their experience at Excellence Academy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">RM</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">Rachel Miller</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Parent</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                  "The dedicated teachers and supportive environment at Excellence Academy have helped my daughter
                  thrive both academically and socially. The personalized attention she receives is wonderful."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">JW</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">James Wilson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Student, Grade 10</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                  "I've found my passion for science through the amazing lab programs here. The teachers don't just
                  teach from textbooks—they inspire us to explore and discover on our own."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-900">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#3A59D1] text-white flex items-center justify-center font-bold dark:bg-blue-700">DR</div>
                  <div className="ml-4">
                    <p className="font-bold dark:text-white">Dr. Sarah Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Education Specialist</p>
                  </div>
                </div>
                <Separator className="dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300">
                  "As an education professional, I'm impressed by Excellence Academy's curriculum. They strike the
                  perfect balance between academic rigor and creative exploration."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3A59D1] text-white dark:bg-blue-800">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our School Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Applications for the upcoming academic year are now open. Schedule a visit or apply today to secure your child's place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#3A59D1] hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
