export default function curriculumVitae({ data }) {
  //   return <div>Curriculum Vitae</div>;
  return (
    <div className="h-[297mm] w-[210mm] p-12">
      <div className="flex">
        <div className="mt-16 grid w-[40%] border-2 border-gray-400 p-10">
          <div className="grid gap-8">
            <div className="mx-auto mt-[-80px]">
              <img
                className="w-40 rounded-full"
                src="https://randomuser.me/api/portraits/women/96.jpg"
                alt=""
              />
            </div>
            <p className="text-4xl font-semibold">Adeline Palmerston</p>
          </div>
          <div className="pt-3">
            <p className="font-light uppercase">Creative Designer</p>
          </div>
          <div className="pt-10">
            <p className="text-2xl font-medium">Contact</p>
            <div className="grid gap-2 pt-4 text-sm font-light">
              <p>123 Anywhere St., Any City, ST 12345</p>
              <p>hello@reallygreatsite.com</p>
              <p>www.reallygreatsite.com</p>
              <p>@reallygreatsite</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <p className="text-2xl font-medium">Skills</p>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex flex-col gap-2">
                  <p className="">Project Management</p>
                  <div className="flex flex-row gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <p className="">Problem Solving</p>
                  <div className="flex flex-row gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <p className="">Creativity</p>
                  <div className="flex flex-row gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <p className="">Leadership</p>
                  <div className="flex flex-row gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pl-10 pt-16">
            <p className="text-2xl font-semibold">About</p>
            <p className="pt-4 text-sm font-light">
              Assists the department head in carrying out digital marketing
              companies works closely with the marketing head for digital
              promotions and others.
            </p>
          </div>
          <div className="pl-10 pt-10">
            <p className="text-2xl font-semibold">Education History</p>
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm font-light">Masters in Product Design</p>
              <p className="text-xs font-light">Jan 2016 - Dec 2017</p>
            </div>
            <div>
              <p className="pt-1 font-medium">Really Great University</p>
              <ul className="list-disc pl-5 pt-3 text-xs">
                <li>Post Graduated in Graphics Designing.</li>
                <li>Gained extensive training.</li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-sm font-light">BA in Product Design</p>
              <p className="text-xs font-light">Dec 2012 - Dec 2016</p>
            </div>
            <div>
              <p className="pt-1 font-medium">Really Great University</p>
              <ul className="list-disc pl-5 pt-3 text-xs">
                <li>
                  Academic Excellence in Product Design, English and
                  Mathematics.
                </li>
              </ul>
            </div>
          </div>
          <div className="pl-10 pt-10">
            <p className="text-2xl font-semibold">Work Experience</p>
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm font-light">Really Great Company</p>
              <p className="text-xs font-light">Oct 2020 - Present</p>
            </div>
            <div>
              <p className="pt-1 font-medium">Creative Designer</p>
              <ul className="list-disc pl-5 pt-3 text-xs">
                <li>Comes up with unique graphic designs for clients.</li>
                <li>Works closely with the copywriting team.</li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-sm font-light">Really Great Company</p>
              <p className="text-xs font-light">Sep 2019 - Aug 2020</p>
            </div>
            <div>
              <p className="pt-1 font-medium">Project Manager</p>
              <ul className="list-disc pl-5 pt-3 text-xs">
                <li>Edited editorial photos for clients and magazines.</li>
                <li>Organization of files.</li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-sm font-light">Really Great Company</p>
              <p className="text-xs font-light">Jan 2018 - July 2019</p>
            </div>
            <div>
              <p className="pt-1 font-medium">Art Director</p>
              <ul className="list-disc pl-5 pt-3 text-xs">
                <li>Worked on marketing campaigns for brands.</li>
                <li>Handled multiple digital accounts.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      data: {},
    },
  };
};
