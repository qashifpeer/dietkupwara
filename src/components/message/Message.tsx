"use client";

import Image from "next/image";
import React from "react";

const Message: React.FC = () => {
  return (
    <section className="flex h-screen max-w-7xl mx-auto p-8 gap-8">
      {/* Left side - Picture with frame */}
      <div className="w-2/5 flex items-center justify-center">
        <div className="w-72 h-96 border-8 border-gray-300 shadow-lg rounded-lg overflow-hidden select-none">
          {/* Dummy Picture placeholder */}
          <Image
            src={""}
            alt="Principal"
            className="w-full h-full object-cover"
            draggable={false}
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Right side - Message */}
      <article className="w-3/5 overflow-y-auto text-gray-900 leading-relaxed text-sm">
        <h2 className="text-xl font-semibold mb-6">
          Message from the Principal
        </h2>
        <p className="mb-4">
          At the District Institute of Education, our foremost commitment is to
          empower teachers with the latest and most effective training programs
          designed for their holistic development. We recognize that educators
          form the foundation of a thriving and progressive society, and it is
          our mission to continually equip them with the knowledge, skills, and
          passion needed to inspire generations of learners.
        </p>
        <p className="mb-4">
          Our institute comprehensively embraces modern pedagogical approaches
          and incorporates cutting-edge technology to ensure that learning is
          not only effective but also engaging. The trainings offered are
          carefully curated to meet the evolving needs of educators, fostering
          both personal and professional growth. We encourage a culture of
          continuous learning where teachers are motivated to explore new
          methods, exchange ideas, and integrate innovative practices in their
          classrooms.
        </p>
        <p className="mb-4">
          We take pride in our state-of-the-art facilities, which have been
          thoughtfully designed to provide an enriching environment conducive to
          learning and collaboration. 
        </p>
        <p className="mb-4">
          The holistic development of teachers is paramount to our vision. This
          means nurturing not just the academic and instructional capabilities
          but also the emotional, social, and ethical dimensions of educators.
          We offer a range of workshops, seminars, and counseling sessions that
          address mental wellness, leadership, communication skills, and
          community engagement, recognizing that effective teaching flows from
          well-rounded individuals.
        </p>
        
        <p>
          Ultimately, our goal is to build a vibrant community of educators who
          are confident, innovative, and dedicated to fostering creativity and
          curiosity within their students. We believe that by investing in
          teacher empowerment, we are investing in the future of education and
          society as a whole.
        </p>
      </article>
    </section>
  );
};

export default Message;
