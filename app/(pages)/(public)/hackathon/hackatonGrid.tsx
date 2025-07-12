import Button from '@/app/components/button/Button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

const HackatonGrid = () => {
  return (
    <div className="flex flex-col w-full pt-7">
      <div className="w-full flex flex-col md:p-20 p-6 gap-[100px]">
        <h1 className="text-white text-center w-full text-4xl">Hack. Build. Win.</h1>
        <div className="flex lg:flex-row w-full flex-col justify-between">
          <div className="max-w-[450px] w-full h-[300px]">
            <img
              src="/aboutHackaton.jpg"
              alt="hackaton"
              className="h-full w-full rounded-3xl border-2 border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300"
            />
          </div>
          <div className="">
            <div className="w-full">
              <h1 className="text-[#684DF4] text-4xl font-medium">What is this Hackathon about ?</h1>
              <div className="text-white">
                <p>
                  An An intense 48-hour challenge where developers, designers, and creatives team <br />
                  up to solve real-world problems.
                </p>
                <p>Collaborate. Submit. Win.</p>
                <p>Quick Stats:</p>
                <ul className="list-disc pl-7">
                  <li>48 Hours</li>
                  <li>100% Virtual</li>
                  <li>Team & Solo Tracks</li>
                  <li>Cash Prizes + Swag</li>
                  <li>Judged by Industry Experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row w-full flex-col justify-between">
          <div className="text-white">
            <h1 className="text-[#684DF4] text-4xl font-medium">Who Can Join?</h1>
            <p>Everyone’s Welcome. </p>
            <p>Whether you’re a coder, designer, product thinker, or just curious this is for you.</p>
            <p>Roles:</p>
            <ul className="list-disc pl-7">
              <li>Innovators – Form teams & build cool stuff</li>
            </ul>
          </div>
          <div className="max-w-[450px] w-full h-[300px]">
            <img
              src="/startUp.jpg"
              alt=""
              className="h-full w-full rounded-3xl border-2 border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="flex lg:flex-row w-full flex-col justify-between gap-[100px]">
          <div className="max-w-[450px] w-full h-[300px]">
            <img
              src="/viewingLife.jpg"
              alt="hackaton"
              className="h-full w-full rounded-3xl border-2 border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300"
            />
          </div>
          <div className="flex-1/2">
            <div className="w-full">
              <h1 className="text-[#684DF4] text-4xl font-medium">How It Works</h1>
              <div className="text-white">
                <p>Simple. Streamlined. Powerful. </p>
                <p>Steps:</p>
                <ul className="list-disc pl-7">
                  <li>Sign Up & Choose a Role</li>
                  <li>Join a Team or Start One</li>
                  <li>Build Your Project</li>
                  <li>Submit. Get Judged. Win Big.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row w-full flex-col justify-between">
          <div className="text-white">
            <h1 className="text-[#684DF4] text-4xl font-medium">Why Join?</h1>
            <p>This Isn’t Just a Hackathon It’s a Launchpad.</p>
            <p>Benefits:</p>
            <ul className="list-disc pl-7">
              <li>Boost your portfolio</li>
              <li>Learn by building</li>
              <li>Network with devs, designers, and founders</li>
              <li>Win prizes, recognition, and more</li>
            </ul>
          </div>
          <div className="max-w-[450px] w-full h-[300px]">
            <img
              src="/viewingLife.jpg"
              alt=""
              className="h-full w-full rounded-3xl border-2 border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="flex lg:flex-row w-full flex-col justify-between gap-[100px]">
          <div className="max-w-[450px] w-full h-[300px]">
            <img
              src="/instructor.jpg"
              alt="hackaton"
              className="h-full w-full rounded-3xl border-2 border-[#684DF4] [box-shadow:0_0_10px_#684DF4,0_0_20px_#684DF4] 
         hover:[box-shadow:0_0_15px_#684DF4,0_0_25px_#684DF4]
         transition-shadow duration-300 object-cover"
            />
          </div>
          <div className="flex-1/2">
            <div className="w-full">
              <h1 className="text-[#684DF4] text-4xl font-medium">Ready to Compete?</h1>
              <div className="text-white">
                <p className="mb-8">It’s Time to Show What You’ve Got.</p>
                <Link href="/hackathon/list">
                  <Button
                    label="Pick a Track"
                    width="w-fit"
                    buttonStyle="custom"
                    iconPosition="left"
                    height="h-[45px]"
                    labelSize="text-[15px] font-lg"
                    customClasses="text-white bg-[#684DF4] hover:text-black hover:bg-white cursor-pointer border border-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90 group"
                    icon={<ArrowRightIcon className="text-white text-[20px] group-hover:text-black" />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackatonGrid;
