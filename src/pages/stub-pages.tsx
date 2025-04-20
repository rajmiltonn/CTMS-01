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
          Our courses are designed to align with industry demands, empowering learners to become confident professionals.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Training Programs Offered</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>
                <strong>Fresher’s Bridge Program:</strong> Foundation for non-IT learners to transition into IT roles.
              </li>
              <li>
                <strong>Salesforce Training:</strong> Focus on Admin, Development, LWC, and Real-time project deployments.
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, SEM, Social Media Marketing, Content Strategy, and Analytics.
              </li>
              <li>
                <strong>Java Full Stack Development:</strong> Core Java, Spring Boot, React.js, REST APIs, and MySQL.
              </li>
              <li>
                <strong>Python Full Stack Development:</strong> Python, Django/Flask, HTML/CSS, JS, and database integration.
              </li>
              <li>
                <strong>Machine Learning & Data Science:</strong> Pandas, Numpy, Scikit-learn, NLP, Deep Learning, and Neural Networks.
              </li>
              <li>
                <strong>Google Analytics:</strong> Campaign tracking, user behavior insights, conversion funnels.
              </li>
              <li>
                <strong>CBSE Academic Foundation Courses (Grades 6–12):</strong> Math, Science, and Conceptual Learning.
              </li>
              <li>
                <strong>Placement Readiness Packages:</strong> Tailored training modules for college students and freshers.
              </li>
            </ul>

            <p className="text-gray-600 mt-6">
              Each course includes real-time projects, industry mentorship, and certification support. CTMS bridges the
              gap between academia and industry through experiential learning and personalized career mapping.
            </p>

            <Button asChild className="bg-[#3A59D1] hover:bg-[#2A49C1] mt-6">
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
          Facilities at Cloud Tech Mind Solutions
        </h1>
        <p className="text-gray-600 mb-8">
          Cloud Tech Mind Solutions provides a professional and engaging environment designed to support modern learning needs.
          Our infrastructure is tailored to encourage hands-on learning, technical exploration, and career development.
        </p>

        <Card className="mb-10 bg-gray-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Training Infrastructure</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Modern, air-conditioned classrooms with digital presentation tools</li>
              <li>Dedicated labs for Full Stack Development, Data Science, and Salesforce practice</li>
              <li>High-speed internet and cloud-based learning platforms</li>
              <li>Collaborative workspaces for group discussions and project execution</li>
              <li>Resource library with curated content and reference materials</li>
              <li>One-on-one career guidance and mentoring zones</li>
              <li>Dedicated spaces for soft skills and language training</li>
              <li>Event areas for workshops, guest lectures, and placement training</li>
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
