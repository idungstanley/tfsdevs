import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { BookOpen, CheckCircle2, ChevronDown, ChevronRight, Circle, Clock, Code, Target, Wrench } from 'lucide-react';
import React, { useState } from 'react';

interface Module {
  title: string;
  concepts: string[];
  skills?: string[];
  tools?: string[];
  duration?: string;
  project?: string;
}

interface CourseLevel {
  level: string;
  goal: string;
  modules: Module[];
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-500 text-white';
    case 'Intermediate':
      return 'bg-blue-500 text-white';
    case 'Advanced':
      return 'bg-red-500 text-white';
    default:
      return 'bg-red-500 text-white';
  }
};

const getLevelProgress = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 33;
    case 'Intermediate':
      return 66;
    case 'Advanced':
      return 100;
    default:
      return 0;
  }
};

const CourseOutlineCard = (props: CourseLevel) => {
  const { level, modules, goal } = props;

  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [completedConcepts, setCompletedConcepts] = useState<Set<string>>(new Set());

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const toggleConcept = (conceptId: string) => {
    const newCompleted = new Set(completedConcepts);
    if (newCompleted.has(conceptId)) {
      newCompleted.delete(conceptId);
    } else {
      newCompleted.add(conceptId);
    }
    setCompletedConcepts(newCompleted);
  };

  return (
    <Card className="overflow-hidden border border-slate-700 bg-slate-900">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge className={`px-3 py-1 text-sm font-semibold ${getLevelColor(level)}`}>{level}</Badge>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <BookOpen className="w-4 h-4" />
                {modules.length} modules
              </div>
            </div>
            <CardTitle className="text-2xl">{level} Level</CardTitle>
          </div>
          <div className="text-left space-y-2">
            <div className="text-sm text-gray-500">Level</div>
            <div className="w-24 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 bg-blue-600" style={{ width: `${getLevelProgress(level)}%` }}></div>
            </div>
          </div>
        </div>
        <CardDescription className="flex items-start gap-2 text-base">
          <Target className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
          {goal}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {modules.map((module, moduleIndex) => {
          const moduleId = `${level}-${moduleIndex}`;
          const isExpanded = expandedModules.has(moduleId);

          return (
            <Collapsible key={moduleIndex} open={isExpanded} onOpenChange={() => toggleModule(moduleId)}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-4 h-auto text-left hover:bg-slate-500">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {moduleIndex + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{module.title}</h3>
                      <p className="text-sm text-gray-200">
                        {module.concepts.length} concepts
                        {module.skills && ` • ${module.skills.length} skills`}
                        {module.tools && ` • ${module.tools.length} tools`}
                      </p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="px-4 pb-4">
                <div className="ml-11 space-y-4">
                  {module.duration && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      Duration: {module.duration}
                    </div>
                  )}

                  {module.project && (
                    <div className="p-3 bg-slate-800 border border-slate-600 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Code className="w-4 h-4 mt-0.5 text-white" />
                        <div>
                          <h4 className="font-medium text-white">Project</h4>
                          <p className="text-sm text-white">{module.project}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Concepts to Learn</h4>
                    <div className="space-y-2">
                      {module.concepts.map((concept, conceptIndex) => {
                        const conceptId = `${moduleId}-concept-${conceptIndex}`;
                        const isCompleted = completedConcepts.has(conceptId);

                        return (
                          <div
                            key={conceptIndex}
                            className="flex items-start gap-3 p-2 rounded hover:bg-slate-600 cursor-pointer"
                            onClick={() => toggleConcept(conceptId)}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${isCompleted ? 'line-through text-gray-300' : 'text-white'}`}>
                              {concept}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {module.skills && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-[#684DF4]">[Skills You&apos;ll Gain]</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className={`text-xs rounded-sm ${getLevelColor(level)}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {module.tools && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-[#684DF4] flex items-center gap-2">
                        [<Wrench className="w-4 h-4" />
                        Tools & Technologies ]
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.tools.map((tool, toolIndex) => (
                          <Badge
                            key={toolIndex}
                            variant="outline"
                            className={`text-xs ${getLevelColor(level)} rounded-sm`}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CourseOutlineCard;
