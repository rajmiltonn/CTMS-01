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
        Courses at Cloud Tech Mind Solutions
        </h1>
        <p className="text-gray-600 mb-8">
        At Cloud Tech Mind Solutions, we offer a future-focused curriculum designed to equip individuals with
        the technical expertise and problem-solving abilities required in today’s fast-evolving digital landscape.
         Our courses are carefully structured to foster a deep understanding of real-world technologies 
         while nurturing innovation and career growth.
        </p>
        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-gray-600 mb-4">
            This page outlines the core structure and philosophy behind our training programs. At CTMS,
             our teaching approach emphasizes hands-on learning, project-based execution, and skill 
             development aligned with industry requirements. The curriculum is continuously updated to 
             reflect current trends in IT and business. Through a combination of live sessions, 
             guided mentorship, and real-time project work, learners gain the confidence and clarity 
             needed to succeed in both entry-level and experienced roles across various domains.

            We believe in building not just skills, but a mindset ready to adapt, grow, and thrive in the 
            competitive technology space.
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
          Learning Facilities at Cloud Tech Mind Solutions
        </h1>
        <p className="text-gray-600 mb-8">
          At Cloud Tech Mind Solutions, we provide a real-time learning environment with top-notch facilities to ensure 
          every student is equipped for today's technology-driven world. Our goal is to foster innovation, collaboration, 
          and career readiness in a modern setting.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Training Infrastructure</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Digitally enabled classrooms with smart presentation tools</li>
              <li>Specialized labs for Full Stack, Salesforce, Python, and ML/AI practice</li>
              <li>Seamless high-speed internet and cloud-accessible content</li>
              <li>Real-time collaborative zones for coding, reviews, and demos</li>
              <li>Library of curated technical resources and learning materials</li>
              <li>Career guidance and mentorship bays for personal attention</li>
              <li>Dedicated training space for soft skills and language development</li>
              <li>Multipurpose zones for bootcamps, workshops, and guest lectures</li>
            </ul>
            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
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
