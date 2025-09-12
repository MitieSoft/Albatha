'use client';
import { Button } from "./ui/button";
import { ArrowRight, FileText, TrendingUp, Globe, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ReportsSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('reports.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('reports.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sustainability Report 2024 */}
                     <div className="bg-gradient-to-br from-albatha-teal/10 to-albatha-teal/5 rounded-3xl p-8 border border-albatha-teal/20 hover:shadow-glow transition-all duration-300 group">
             <div className="flex items-center justify-between mb-6">
               <div className="w-16 h-16 bg-albatha-teal rounded-xl flex items-center justify-center">
                 <Globe className="w-8 h-8 text-albatha-navy" />
               </div>
               <div className="text-sm font-medium text-albatha-teal bg-albatha-teal/20 px-3 py-1 rounded-full">
                 New
               </div>
             </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Sustainability Report for 2024
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover our comprehensive approach to environmental stewardship, social responsibility, 
              and governance excellence. Learn about our progress, commitments, and future roadmap 
              towards a more sustainable future.
            </p>
            <div className="flex items-center justify-between">
                             <Button className="bg-albatha-teal text-albatha-navy hover:bg-albatha-teal-dark hover:shadow-xl hover:scale-105 font-medium transition-all duration-300">
                 <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                 Download Report
               </Button>
              <div className="text-sm text-muted-foreground">
                PDF • 24.5 MB
              </div>
            </div>
          </div>

          {/* Latest Reports Grid */}
          <div className="space-y-6">
                         <div className="bg-card rounded-2xl p-6 border border-border hover:border-albatha-teal/30 transition-all duration-300 group">
               <div className="flex items-center justify-between mb-4">
                 <div className="w-12 h-12 bg-albatha-teal/20 rounded-lg flex items-center justify-center">
                   <FileText className="w-6 h-6 text-albatha-teal" />
                 </div>
                 <span className="text-xs text-muted-foreground">Q4 2024</span>
               </div>
               <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-albatha-teal transition-colors">
                 Financial Performance Report
               </h4>
               <p className="text-muted-foreground text-sm mb-4">
                 Comprehensive analysis of our financial results, strategic investments, and market performance.
               </p>
               <Button variant="ghost" size="sm" className="text-albatha-teal hover:bg-albatha-teal/20 hover:scale-105 transition-all duration-300">
                 View Report
                 <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
               </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-aldar-teal/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-aldar-teal/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-aldar-teal" />
                </div>
                <span className="text-xs text-muted-foreground">Annual</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-aldar-teal transition-colors">
                Market Analysis & Trends
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                In-depth market insights, emerging trends, and strategic opportunities in real estate.
              </p>
              <Button variant="ghost" size="sm" className="text-aldar-teal hover:bg-aldar-teal/20 hover:scale-105 transition-all duration-300">
                View Report
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-aldar-teal/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-aldar-teal/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-aldar-teal" />
                </div>
                <span className="text-xs text-muted-foreground">Monthly</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-aldar-teal transition-colors">
                Development Progress Update
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Latest updates on our ongoing projects, construction milestones, and delivery schedules.
              </p>
              <Button variant="ghost" size="sm" className="text-aldar-teal hover:bg-aldar-teal/20 hover:scale-105 transition-all duration-300">
                View Report
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
                     <Button variant="outline" size="lg" className="border-albatha-teal text-albatha-teal hover:bg-albatha-teal hover:text-albatha-navy hover:shadow-xl hover:scale-105 font-medium text-lg px-8 py-4 transition-all duration-300">
             {t('reports.viewAll')}
             <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
           </Button>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
