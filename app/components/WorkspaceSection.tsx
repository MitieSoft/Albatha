'use client';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import workspaceImage from "../assets/workspace-image.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const WorkspaceSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px]">
            <Image 
              src={workspaceImage} 
              alt="Modern Abu Dhabi skyline with luxury buildings" 
              fill
              className="rounded-2xl shadow-elegant object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-Albatha -dark-navy/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('workspace.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('workspace.subtitle')}
              </p>
                             <Button variant="Albatha" className="bg-Albatha -teal text-Albatha -light hover:bg-Albatha -teal-dark hover:shadow-xl hover:scale-105 font-medium transition-all duration-300">
                 {t('workspace.learnMore')}
                 <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
               </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                               <div className="text-3xl font-bold text-Albatha -teal mb-2">50+</div>
                 <div className="text-sm text-muted-foreground">{t('workspace.premiumDevelopments')}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-Albatha -teal mb-2">2M+</div>
                 <div className="text-sm text-muted-foreground">{t('workspace.sqFtDeveloped')}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-Albatha -teal mb-2">25+</div>
                 <div className="text-sm text-muted-foreground">{t('workspace.yearsExperience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;