import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "./button/Button";
import IntegrationsColumn from "./IntegrationsColumn";
import Tag from "./Tag";

const integrations = [
  { name: 'Figma', icon: 'figma-logo.svg', description: 'Figma is a collaborative interface design tool.' },
  { name: 'Notion', icon: 'notion-logo.svg', description: 'Notion is an all-in-one workspace for notes and docs.' },
  { name: 'Slack', icon: 'slack-logo.svg', description: 'Slack is a powerful team communication platform.' },
  { name: 'Relume', icon: 'relume-logo.svg', description: 'Relume is a no-code website builder and design system.' },
  { name: 'Framer', icon: 'framer-logo.svg', description: 'Framer is a professional website prototyping tool.' },
  { name: 'GitHub', icon: 'github-logo.svg', description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'Javascript', icon: 'javascript.svg', description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'React', icon: 'react.svg', description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'Node', icon: 'node.svg', description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'Fullstack', icon: 'fullstack.svg', description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'Nextjs', icon: 'nextjs.svg', description: 'GitHub is the leading platform for code collaboration.' }
];
export type IntegrationsType = typeof integrations;


export default function Integrations() {
  return (
    <section className="py-24 px-20 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="text-white">
            [<Tag>Basic Tools and languages</Tag>]
            <h2 className="text-6xl font-medium mt-6 ">
              Gain Practical Tech Skills from Experts You Can <span className="text-[#684DF4]">Trust</span>
            </h2>
            <p className="text-white/50 my-4 text-lg">
              JavaScript, React, and TypeScript to Node.js and Backend (Git, Docker, & More)
            </p>
            <Button
              label="Join now"
              width="w-fit"
              buttonStyle="custom"
              height="h-[36px]"
              labelSize="text-[15px] font-lg rounded-md"
              customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full"
              icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
              iconPosition="right"
            />
          </div>
          <div className="">
            <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4  mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


