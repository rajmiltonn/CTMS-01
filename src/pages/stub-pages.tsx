import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

/**
 * Stub pages for initial navigation
 * These would be filled with proper content in a real project
 */

// Academics page
export const AcademicsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Academics
        </h1>
        <p className="text-gray-600 mb-8">
          At Excellence Academy, we provide a comprehensive curriculum that prepares students for the challenges of tomorrow.
          Our academic programs focus on developing critical thinking, creativity, and a solid foundation of knowledge.
        </p>
        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-gray-600 mb-4">
              This page would include detailed information about our curriculum, teaching methodology,
              class structure, and academic achievements.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

// Facilities page
export const FacilitiesPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Facilities
        </h1>
        <p className="text-gray-600 mb-8">
          Our campus is equipped with state-of-the-art facilities designed to enhance the learning experience
          and support student development in all areas.
        </p>
        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Campus Facilities</h2>
            <p className="text-gray-600 mb-4">
              This page would showcase our modern classrooms, science laboratories, library, sports facilities,
              technology centers, and other campus amenities.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

// Admissions page
export const AdmissionsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Admissions
        </h1>
        <p className="text-gray-600 mb-8">
          We welcome applications from students who are eager to learn and grow in our supportive and
          challenging academic environment.
        </p>
        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Admissions Process</h2>
            <p className="text-gray-600 mb-4">
              This page would include detailed information about application requirements, deadlines,
              tuition fees, financial aid options, and the admissions timeline.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

// News & Events page
export const NewsEventsPage = () => {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          News & Events
        </h1>
        <p className="text-gray-600 mb-8">
          Stay updated on the latest happenings at Excellence Academy, including upcoming events,
          student achievements, and school announcements.
        </p>
        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">School News & Calendar</h2>
            <p className="text-gray-600 mb-4">
              This page would feature a regularly updated news section and an event calendar
              highlighting important dates, celebrations, and academic activities.
            </p>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
